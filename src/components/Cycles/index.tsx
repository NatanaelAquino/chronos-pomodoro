import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNetCycles } from '../../utils/getNextCycles';
import { getNetCyclesType } from '../../utils/getNextCylesType';
import Styles from './Styles.module.css';

export const Cycles = () => {
  const { state } = useTaskContext();
  const cyleStep = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    WorkTime: 'Foco',
    ShortBrakTime: 'Descanso curto',
    LongBreakTime: 'Descanso longo',
  };
  return (
    <div className={Styles.Cycles}>
      <span>Clicos:</span>
      <div className={Styles.cycleDots}>
        {cyleStep.map((_, index) => {
          const nextCycle = getNetCycles(index);
          const nextCyleType = getNetCyclesType(nextCycle);
          return (
            <span
              key={`${nextCyleType}_${nextCycle}`}
              className={`${Styles.cyleDot} ${Styles[nextCyleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCyleType]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[nextCyleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
