import React from 'react';
import { Input } from '../Input';
import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import Styles from './Styles.module.css'
type DefaultForm = {
  
} & React.ComponentProps<'form'>;

export function DefaultForm() {

  return (
    <form className= {Styles.form} action=''>
      <div className={Styles.formRow}>
        <Input
          LabelText='Task'
          id='MeuInput'
          type='text'
          title='name'
          placeholder='Digite Alguma coisa'
        />
      </div>
      <div className={Styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={Styles.formRow}>
        <Cycles />
      </div>
      <div className={Styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
