import React from 'react';
import Styles from './Styles.module.css'
type ContainerProps = {
  children: React.ReactNode;
};
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <section>{children}</section>
      </div>
    </div>
  );
};

