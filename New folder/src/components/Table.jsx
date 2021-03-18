import React from "react";
import { readRemoteFile } from "react-papaparse";
import { CsvToHtmlTable } from "react-csv-to-table";

export default function BasicTable({ tablename, setError }) {
  const [data, setData] = React.useState(null);

  const shortTD = () => {
    document.querySelector("table").classList.add("table-responsive");
    const tds = document.querySelectorAll("td");
    Array.from(tds).map((td) => {
      let newData =
        td.textContent.length > 25
          ? td.textContent.slice(1, 25) + "...."
          : td.textContent;
      td.textContent = newData;
      return false;
    });
  };
  // eslint-disable-next-line
  React.useEffect(
    () => {
      async function getCSV(filename) {
        readRemoteFile(
          `https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${filename}.csv`,
          {
            complete: (results) => {
              setData(results.data);
              shortTD();
            },
            error: (err) => {
              // eslint-disable-next-line
              setError("CSV File Reading Error");
            },
          }
        );
      }
      getCSV(tablename.charAt(0).toLowerCase() + tablename.substring(1));
    }, // eslint-disable-next-line
    []
  );

  let sampleData = ``;

  if (data) {
    data.map((item) => {
      sampleData += item.toString() + "\n";
      return false;
    });
  }
  return (
    <CsvToHtmlTable
      pagination={true}
      data={sampleData}
      csvDelimiter=","
      tableClassName="table table-striped table-hover"
    />
  );
}
