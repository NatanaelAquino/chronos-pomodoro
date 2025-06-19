import Styles from './Styles.module.css';

export const Cycles = () => {
  return (
    <div className={Styles.Cycles}>
      <span>Clicos:</span>
      <div className={Styles.cycleDots}>
        <span className={`${Styles.cyleDot} ${Styles.workTime}`}></span>
        <span className={`${Styles.cyleDot} ${Styles.shortBreakTime}`}></span>
        <span className={`${Styles.cyleDot} ${Styles.workTime}`}></span>
        <span className={`${Styles.cyleDot} ${Styles.shortBreakTime}`}></span>
        <span className={`${Styles.cyleDot} ${Styles.workTime}`}></span>
        <span className={`${Styles.cyleDot} ${Styles.shortBreakTime}`}></span>
        <span className={`${Styles.cyleDot} ${Styles.workTime}`}></span>
        <span className={`${Styles.cyleDot} ${Styles.longBreakTime}`}></span>
      </div>
    </div>
  );
};
