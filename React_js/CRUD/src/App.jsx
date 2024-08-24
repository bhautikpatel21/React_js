import { useState } from "react";
import CustomTable from "./Components/CustomTable";
import UserTable2 from "./Components/CustomTable2";
import "./App.css";
import Pagination from "./Components/Pagination";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomTable/>
      <Pagination/>
      {/* <UserTable2 /> */}
    </>
  );
}

export default App;
