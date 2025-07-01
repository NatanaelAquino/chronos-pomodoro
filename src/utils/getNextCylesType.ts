import type { TaskModel } from '../Models/TaskModel';

export function getNetCyclesType(currentCyles: number): TaskModel['type'] {
  if (currentCyles % 8 === 0) return 'LongBreakTime';
  if (currentCyles % 2 === 0) return 'ShortBrakTime';
  return 'WorkTime';
}
