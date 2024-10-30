import styles from "./TaskInput.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../slices/taskSlice";
import { TextField, Button } from "@mui/material";

const TaskInput: React.FC = () => {
  const [taskText, setTaskText] = useState<string>("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  return (
    <div className={styles["input-container"]}>
      <TextField
        label="Новая задача"
        variant="outlined"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAddTask}>
        Добавить
      </Button>
    </div>
  );
};

export default TaskInput;
