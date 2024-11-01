import styles from "./App.module.css";
import React from "react";
import TaskInput from "..//TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import { Container, Typography } from "@mui/material";
import { Check } from "lucide-react";

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <header className={styles.header}>
        <Check />
        <Typography
          className={styles["header__title"]}
          variant="h4"
          align="center"
          gutterBottom
        >
          Perfect ToDo
        </Typography>
      </header>
      <main className={styles.main}>
        <TaskInput />
        <TaskList />
      </main>
    </Container>
  );
};

export default App;
