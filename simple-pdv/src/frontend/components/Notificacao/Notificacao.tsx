import { Box } from "@radix-ui/themes";

interface NotificacaoProps {
  mensagem: string;
}

export default function Notificacao({ mensagem }: NotificacaoProps) {
  return (
    <Box
      style={{
        position: "fixed",
        top: "2vh",
        right: "2vw",
        backgroundColor: "#333",
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      {mensagem}
    </Box>
  );
}
