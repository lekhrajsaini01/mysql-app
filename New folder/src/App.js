import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";
import React from "react";
function App() {
  const [isSidebar, setSidebar] = useState(false);
  const [tablename, setTablename] = useState("");
  const [isExecuted, setExecuted] = React.useState(false);
  const [isError, setError] = React.useState(false);
  return (
    <div>
      <Navbar isSidebar={isSidebar} setSidebar={setSidebar} />
      <SideBar
        isSidebar={isSidebar}
        tablename={tablename}
        setTablename={setTablename}
        setExecuted={setExecuted}
      />
      <Main
        tablename={tablename}
        setTablename={setTablename}
        isExecuted={isExecuted}
        setExecuted={setExecuted}
        isSidebar={isSidebar}
        setSidebar={setSidebar}
        isError={isError}
        setError={setError}
      />
    </div>
  );
}

export default App;
