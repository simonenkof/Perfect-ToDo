import taskReducer, { addTask, toggleTask, deleteTask } from "./taskSlice";

describe("taskSlice", () => {
  const initialState = {
    items: [],
  };

  it("должен инициализироваться с initialState", () => {
    expect(taskReducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("должен добавить задачу в список", () => {
    const newTaskText = "Test task";
    const action = addTask(newTaskText);
    const nextState = taskReducer(initialState, action);

    expect(nextState.items).toHaveLength(1);
    expect(nextState.items[0]).toEqual({
      id: expect.any(Number),
      text: newTaskText,
      completed: false,
    });
  });

  it("должен переключить статус задачи", () => {
    const action = addTask("Test task");
    const stateWithTask = taskReducer(initialState, action);
    const taskId = stateWithTask.items[0].id;

    const toggleAction = toggleTask(taskId);
    const nextState = taskReducer(stateWithTask, toggleAction);

    expect(nextState.items[0].completed).toBe(true);
  });

  it("должен удалить задачу", () => {
    const initialState = {
      items: [
        { id: 1, text: "Task 1", completed: false },
        { id: 2, text: "Task 2", completed: false },
        { id: 3, text: "Task 3", completed: true },
      ],
    };

    const newState = taskReducer(initialState, deleteTask(2));

    expect(newState.items).toHaveLength(2);
    expect(newState.items.find((task) => task.id === 2)).toBeUndefined();
    expect(newState.items).toEqual([
      { id: 1, text: "Task 1", completed: false },
      { id: 3, text: "Task 3", completed: true },
    ]);
  });
});
