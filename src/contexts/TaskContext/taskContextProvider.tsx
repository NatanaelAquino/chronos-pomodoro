import { useReducer } from "react";
import { initialState } from "./initialState";
import { TaskContext } from "./TaskContext";
import  { taskReducer } from "./taskReducer";
type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, disatch] = useReducer(taskReducer,initialState);
  return (
    <TaskContext.Provider value={{ state, disatch }}>
      {children}
    </TaskContext.Provider>
  );
}

