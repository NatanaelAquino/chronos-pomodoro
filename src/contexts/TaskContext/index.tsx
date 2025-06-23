import React, { createContext, useContext, useState } from 'react';
import type { TasRStateModel } from '../../Models/TaskStateModel';
const initialState: TasRStateModel = {
  task: [],
  secondsReamaining: 0,
  formattedSecondsRemaining: '00:01',
  activeTask: null,
  currentCycle: 0,
  config: {
    WorkTime: 25,
    ShortBrakTime: 5,
    LongBreakTime: 15,
  },
};

type tasrContextProps = {
  state: TasRStateModel;
  SetState: React.Dispatch<React.SetStateAction<TasRStateModel>>;
};
const inital = {
  state: initialState,
  SetState: () => {},
};
export const TaskContext = createContext<tasrContextProps>(inital);

type TaskContextProviderProps = {
  children: React.ReactNode;
};
export function useTaskContext() {
  return useContext(TaskContext);
}
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, SetState] = useState(initialState);
  return (
    <TaskContext.Provider value={{ state, SetState }}>
      {children}
    </TaskContext.Provider>
  );
}
