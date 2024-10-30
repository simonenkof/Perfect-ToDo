import styles from "./TaskItem.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask } from "../../slices/taskSlice";
import { ListItem, ListItemText, Checkbox } from "@mui/material";
import { clsx } from "clsx";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <ListItem className={styles["task-container"]}>
      <Checkbox checked={task.completed} onChange={handleToggle} />
      <ListItemText
        primary={
          <ListItemText
            primary={
              <span
                className={clsx(styles["task-container__text"], {
                  [styles["text_completed"]]: task.completed,
                })}
              >
                {task.text}
              </span>
            }
          />
        }
      />
    </ListItem>
  );
};

export default TaskItem;
