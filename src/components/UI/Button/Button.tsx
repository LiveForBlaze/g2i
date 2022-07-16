import React from 'react';
import styles from './Button.module.css';

interface BoxProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  inverted?: Boolean;
}

export const Button: React.FC<BoxProps> = ({ children, className, inverted, ...restProps }) => {
  return (
    <button className={`
        ${styles.button} \
        ${className} \
        ${inverted ? styles.inverted : ''} \
      `} { ...restProps }>
      {children}
    </button>
  )
}