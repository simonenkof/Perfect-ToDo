import styles from "alo.module.css";
import React from "react";
import { Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <header>
        <Typography variant="h4" align="center" gutterBottom>
          Perfect ToDo
        </Typography>
      </header>
      <main></main>
    </Container>
  );
};

export default App;
