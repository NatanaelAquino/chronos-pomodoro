import type { TasRStateModel } from '../../Models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNetCycles } from '../../utils/getNextCycles';
import { type TaskActionModel, TaskActionTypes } from './taskAction';

export function taskReducer(
  state: TasRStateModel,
  action: TaskActionModel,
 
): TasRStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNetCycles(state.currentCycle);
      const secondsReamaining = newTask.duration * 60;
      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsReamaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsReamaining),
        tasks: [...state.task, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask:null,
        secondsReamaining:0,
        formattedSecondsRemaining: '00:00',
        tasks: state.task.map(taks => {
          if (state.activeTask && state.activeTask.id === taks.id) {
            return {...taks, interruptDate:Date.now()};
          }
          return taks;
        }),
    //
      }
    }
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }

  // Sempre deve retornar o estado
  return state;
}
