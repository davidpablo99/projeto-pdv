import { Badge, Button, Flex, Text } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";
import {} from "@radix-ui/react-icons"
import { BsCartFill, BsFillPeopleFill } from "react-icons/bs";
import { AiFillDashboard, AiFillProduct } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import "./Sidebar.css"
import { FaUserAlt } from "react-icons/fa";


export default function Sidebar() {
  const handleLogout = ()=>{
    alert("Tem certeza que deseja deslogar?")
  }
  const variantBadge = "outline"
  
  return (
    <>
      <Flex my={"4"} justify={"center"} style={{margin: "0", padding: "0",backgroundColor: "#102a4f", paddingTop: "1vw", paddingBottom:"1vw"}}>
        <Text className="text-logo">Simple PDV</Text>
      </Flex>
      <Flex direction={"column"} m={"2"} className="sidebar" height={"100vw"}>
        <br />
          <nav style={{textAlign: "left"}}>
            <NavLink to={"/dashboard"}>
              <Badge variant={variantBadge} radius="none" size={"3"} className="sidebar-badge">
                <AiFillDashboard />
                Dashboard
              </Badge>
            </NavLink>
            <br />
            <NavLink to={"/vendas"}>
              <Badge variant={variantBadge} radius="none" size={"3"} className="sidebar-badge">
                <BsCartFill/>
                  Vendas
              </Badge>
            </NavLink>
            <br />
            <NavLink to={"/produtos"}>
              <Badge variant={variantBadge} radius="none" size={"3"} className="sidebar-badge">
                <AiFillProduct />
                Produtos
              </Badge>
            </NavLink>
            <br />
            <NavLink to={"/clientes"}>
              <Badge variant={variantBadge} radius="none" size={"3"} className="sidebar-badge">
                <BsFillPeopleFill />
                Clientes
              </Badge>
            </NavLink>
            <br />
            <NavLink to={"/financeiro"}>
            <Badge variant={variantBadge} radius="none" size={"3"} className="sidebar-badge">
              <RiMoneyDollarCircleFill />
              Financeiro
              </Badge>
            </NavLink>
            <br />
            <NavLink to={"/relatorios"}>
              <Badge variant={variantBadge} radius="none" size={"3"} className="sidebar-badge">
                <TbReportAnalytics />
                Relatórios
              </Badge>
            </NavLink>
            <br />
            <NavLink to={"/conta"}>
              <Badge variant={variantBadge} radius="none" size={"3"} className="sidebar-badge">
                <FaUserAlt />
                Conta
              </Badge>
            </NavLink>
            <br />
            <NavLink to={"/configuraçoes"}>
              <Badge variant={variantBadge} radius="none" size={"3"} className="sidebar-badge">
                <IoIosSettings />
                Configurações
              </Badge>
            </NavLink>
        </nav>
        <br />
        <hr />
        <br />
        <Button onClick={handleLogout}>Logout</Button>
      </Flex>
      </>
  )
}
