export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  srtarDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: 'WorkTime' | 'ShortBrakTime' | 'LongBreakTime';
};
