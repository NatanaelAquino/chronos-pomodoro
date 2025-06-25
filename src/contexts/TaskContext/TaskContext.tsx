import { createContext } from "react";
import type { TasRStateModel } from "../../Models/TaskStateModel";
import { initialState } from "./initialState";


type tasrContextProps = {
  state: TasRStateModel;
  SetState: React.Dispatch<React.SetStateAction<TasRStateModel>>;
};
const inital = {
  state: initialState,
  SetState: () => {},
};
export const TaskContext = createContext<tasrContextProps>(inital);

