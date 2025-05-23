import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./frontend/pages/Dashboard/Dashboard";
import App from "./App";
import Vendas from "./frontend/pages/Vendas/Vendas";
import Produtos from "./frontend/pages/Produtos/Produtos";
import Relatorios from "./frontend/pages/Relatorios/Relatorios";
import Configuracoes from "./frontend/pages/Configuracoes/Configuracoes";
import Financeiro from "./frontend/pages/Financeiro/Financeiro";
import Clientes from "./frontend/pages/Clientes/Clientes";
import Conta from "./frontend/pages/Conta/Conta";

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
            },
            {
                path: "conta",
                element: <Conta/>
            }

        ]
    }
])

export default router