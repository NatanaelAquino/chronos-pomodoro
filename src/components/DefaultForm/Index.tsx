import React, { useRef } from 'react';
import { Input } from '../Input';
import { Cycles } from '../Cycles';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import Styles from './Styles.module.css';
import type { TaskModel } from '../../Models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext';
import { getNetCycles } from '../../utils/getNextCycles';
import { getNetCyclesType } from '../../utils/getNextCylesType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';
import { Tips } from '../tips';
type DefaultForm = {} & React.ComponentProps<'form'>;
export function DefaultForm() {
  const { state, disatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNetCycles(state.currentCycle);
  const nextCycleType = getNetCyclesType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!taskNameInput.current) return;

    const taksName = taskNameInput.current.value.trim();
    console.log(taksName);
    if (!taksName) {
      alert('DIGITE O NOME DA TAREFA');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taksName,
      srtarDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    disatch({ type: TaskActionTypes.START_TASK, payload: newTask });

  
  }

  function handlInterruptTask() {
    disatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }
  return (
    <form onSubmit={handleCreateNewTask} className={Styles.form} action=''>
      <div className={Styles.formRow}>
        <Input
          LabelText='Task'
          id='meuInput'
          type='text'
          title='name'
          placeholder='Digite Alguma coisa'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className={Styles.formRow}>
        <Tips />
      </div>
      {state.currentCycle > 0 && (
        <div className={Styles.formRow}>
          <Cycles />
        </div>
      )}
      <div className={Styles.formRow}>
        {!state.activeTask && (
          <DefaultButton
            aria-label='Iniciar outra Tarefa'
            title='Iniciar outra Tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
          />
        )}
        {!!state.activeTask && (
          <DefaultButton
            aria-label='Interromper Tarefa atual'
            title='Interromper Tarefa atual'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handlInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
