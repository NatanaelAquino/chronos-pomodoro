import { createContext } from "react";
import type { TasRStateModel } from "../../Models/TaskStateModel";
import { initialState } from "./initialState";
import { type TaskActionModel } from "./taskAction";


type tasrContextProps = {
  state: TasRStateModel;
  disatch: React.Dispatch<TaskActionModel>;
};
const inital = {
  state: initialState,
  disatch: () => {},
};
export const TaskContext = createContext<tasrContextProps>(inital);

