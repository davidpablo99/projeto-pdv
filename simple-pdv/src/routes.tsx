import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import App from "./App";
import Vendas from "./pages/Vendas/Vendas";
import Produtos from "./pages/Produtos/Produtos";
import Relatorios from "./pages/Relatorios/Relatorios";
import Configuracoes from "./pages/Configuracoes/Configuracoes";
import Financeiro from "./pages/Financeiro/Financeiro";
import Clientes from "./pages/Clientes/Clientes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard/>
            },
            {
                path: "vendas",
                element: <Vendas/>
            },
            {
                path:"produtos",
                element: <Produtos/>
            },
            {
                path: "relatorios",
                element: <Relatorios/>
            },
            {
                path: "configuraçoes",
                element: <Configuracoes/>
            },
            {
                path: "financeiro",
                element: <Financeiro/>
            },
            {
                path: "clientes",
                element: <Clientes/>
            }
            
            
            
            
        ]
    }
])

export default router