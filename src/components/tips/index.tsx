import { useTaskContext } from '../../contexts/TaskContext';
import { getNetCycles } from '../../utils/getNextCycles';
import { getNetCyclesType } from '../../utils/getNextCylesType';

export function Tips (){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { state } = useTaskContext();
  
    const nextCycle = getNetCycles(state.currentCycle);
    const nextCycleType = getNetCyclesType(nextCycle);

    
   const tipsFormWhenActiveTask = {
    WorkTime: <span>Foque por {state.config.WorkTime}</span>,
    ShortBrakTime: (
      <span>Descanse por {state.config.ShortBrakTime}</span>
    ),
    LongBreakTime: (
      <span>Descanso longo {state.config.LongBreakTime}</span>
    ),
  };
  const tipsFormNoActiveTask = {
    WorkTime: <span>Proximo Cliclo é de {state.config.WorkTime}</span>,
    ShortBrakTime: (
      <span>Proximo descanso é de {state.config.ShortBrakTime}</span>
    ),
    LongBreakTime: (
      <span>Proximo descanso será longo {state.config.LongBreakTime}</span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsFormWhenActiveTask[state.activeTask.type]}
       {!state.activeTask && tipsFormNoActiveTask[nextCycleType]}
    </>
  )
}