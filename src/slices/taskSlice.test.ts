import taskReducer, { addTask, toggleTask, moveTask } from "./taskSlice";

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

  it("должен переместить задачу", () => {
    const task1 = addTask("Task 1");
    const task2 = addTask("Task 2");
    const stateWithTasks = taskReducer(taskReducer(initialState, task1), task2);

    const moveAction = moveTask({ fromIndex: 0, toIndex: 1 });
    const nextState = taskReducer(stateWithTasks, moveAction);

    expect(nextState.items[0].text).toBe("Task 2");
    expect(nextState.items[1].text).toBe("Task 1");
  });
});
