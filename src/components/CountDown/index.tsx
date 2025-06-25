import { useTaskContext } from '../../contexts/TaskContext';
import Styles from './Styles.module.css';

export function CountDown() {
  const { state } = useTaskContext();
  return (
    <div className={Styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
