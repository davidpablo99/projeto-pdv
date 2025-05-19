import { Box } from "@radix-ui/themes";
import Manutencao from "../Manutencao";

export default function Dashboard() {
  return (
    <Box className="layout-container-direito">
      <h1>Dashboard</h1><br />
      <Manutencao/>
    </Box>
  );
}
