import { TableCell } from "@material-ui/core";
import React from "react";

function TableData({ item }) {
  console.log(item);
  return (
    <>
      {item.map((value) => {
        return <TableCell>Demo</TableCell>;
      })}
    </>
  );
}

export default TableData;
