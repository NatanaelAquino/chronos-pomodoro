import Styles from './Styles.module.css';
import {  useTaskContext } from '../../contexts/TaskContext';

export function CountDown () {
  const {state} = useTaskContext()
  return <div className={Styles.container}>{state.formattedSecondsRemaining}</div>;
};
