import styles from "./TaskList.module.css";
import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
  Divider,
} from "@mui/material";
import TaskItem from "../TaskItem/TaskItem";
import EmptyMessage from "../EmptyMessage/EmptyMessage";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface RootState {
  tasks: {
    items: Task[];
  };
}

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.items);
  const currentTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <Card variant="outlined" className={styles["list-container"]}>
      <Typography variant="h6">Текущие задачи:</Typography>
      <List>
        {currentTasks.length > 0 ? (
          currentTasks.map((task) => (
            <ListItem key={task.id}>
              <Card
                variant="outlined"
                className={styles["list-container__item"]}
              >
                <CardContent>
                  <TaskItem task={task} />
                </CardContent>
              </Card>
            </ListItem>
          ))
        ) : (
          <EmptyMessage />
        )}
      </List>

      <Divider />

      <Typography variant="h6">Выполенные задачи:</Typography>
      <List>
        {completedTasks.length > 0 ? (
          completedTasks.map((task) => (
            <ListItem key={task.id}>
              <Card
                variant="outlined"
                className={styles["list-container__item"]}
              >
                <CardContent>
                  <TaskItem task={task} />
                </CardContent>
              </Card>
            </ListItem>
          ))
        ) : (
          <EmptyMessage />
        )}
      </List>
    </Card>
  );
};

export default TaskList;
