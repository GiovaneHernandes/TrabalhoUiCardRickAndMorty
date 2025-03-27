import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Cartao({ personagem }) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        backgroundColor: "#0b002e",
        minWidth: 290,
        textAlign: "left",
        padding: 2,
      }}
    >
      <CardContent>
        <img
          src={personagem.image}
          alt={personagem.name}
          style={{ width: "100%", borderRadius: "10px", alignItems: "center" }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "white", marginTop: 1 }}
        >
          {personagem.name}
        </Typography>
        <Typography color="white">Espécie: {personagem.species}</Typography>
        <Typography color="white">Gênero: {personagem.gender}</Typography>
        <Typography color="white">Origem: {personagem.origin.name}</Typography>
        <Typography color="white">Status: {personagem.status}</Typography>
      </CardContent>
    </Card>
  );
}
