import React from 'react';
import Sytles from './Styles.module.css';
type defaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;
export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: defaultButtonProps) {
  return (
    <>
      <button {...props} className={`${Sytles.button} ${Sytles[color]}`}>
        {icon}
      </button>
    </>
  );
}
