import { useState } from "react";
import { initialState } from "./initialState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, SetState] = useState(initialState);
  return (
    <TaskContext.Provider value={{ state, SetState }}>
      {children}
    </TaskContext.Provider>
  );
}