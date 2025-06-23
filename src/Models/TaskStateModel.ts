import type { TaskModel } from './TaskModel';

export type TasRStateModel = {
  task: [TaskModel]; 
  secondsReamaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    WorkTime: number;
    ShortBrakTime: number;
    LongBreakTime: number;
  };
};
