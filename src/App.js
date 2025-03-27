import React, { useState } from "react";
import axios from "axios";
import { Container, Grid, Button, Typography } from "@mui/material";
import Cartao from "./components/cartao";

const App2 = () => {
  const [dados, setDados] = useState([]);

  const buscarDados = async () => {
    try {
      const resposta = await axios.get(
        "https://rickandmortyapi.com/api/character/?page=1"
      );
      setDados(resposta.data.results);
    } catch (erro) {
      console.error("Erro ao buscar os dados:", erro);
    }
  };

  return (
    <Container sx={{ textAlign: "center", padding: 3 }}>
      <Typography variant="h4">Rick and Morty</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={buscarDados}
        sx={{ marginBottom: 3 }}
      >
        Buscar Personagens
      </Button>
      <Grid container spacing={3}>
        {dados.map((personagem) => (
          <Grid item key={personagem.id}>
            <Cartao personagem={personagem} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App2;
