import type { TasRStateModel } from "../../Models/TaskStateModel";

export const initialState: TasRStateModel = {
  task: [],
  secondsReamaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    WorkTime: 25,
    ShortBrakTime: 5,
    LongBreakTime: 15,
  },
};