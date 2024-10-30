import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  items: Task[];
}

const initialState: TaskState = {
  items: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.items.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    moveTask: (
      state,
      action: PayloadAction<{ fromIndex: number; toIndex: number }>
    ) => {
      const { fromIndex, toIndex } = action.payload;
      const [movedTask] = state.items.splice(fromIndex, 1);
      state.items.splice(toIndex, 0, movedTask);
    },
  },
});

export const { addTask, toggleTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;
