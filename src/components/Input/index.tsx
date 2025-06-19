import React from 'react';
import Sytles from './Styles.module.css'
type defaultInputProps = {
  id: string;
  LabelText?: string;
} & React.ComponentProps<'input'>;
export function Input({ id, type, LabelText, ...rest }: defaultInputProps) {
  return (
    <>
      {LabelText && <label htmlFor={id}> {LabelText}</label> }
      <input id={id} type={type} {...rest}  className={Sytles.Input}/>
    </>
  );
}
