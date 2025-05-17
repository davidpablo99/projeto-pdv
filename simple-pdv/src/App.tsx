import "@radix-ui/themes/styles.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Flex } from "@radix-ui/themes";


export default function App(){
  return (
    <Flex direction={"row"} gap={"2"}>
      <Flex direction={"column"} style={{height: "100vh", width: "12rem"}} className="container-sidebar">
        <Sidebar/>
      </Flex>
      <Flex direction={"column"} style={{height: "100vh"}}>
        <Outlet/>
      </Flex>
    </Flex>
  )
}