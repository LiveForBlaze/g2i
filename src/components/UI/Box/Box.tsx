import styles from './Box.module.css';

interface BoxProps extends React.PropsWithChildren {
  className?: string;
  inverted?: boolean;
  width?: number;
  min?: number;
  max?: number;
}

export const Box: React.FC<BoxProps> = (props) => {

  const style = {
    minWidth: props.min,
    maxWidth: props.max,
    width: props.width,
  }

  return (
    <div 
      className={`
        ${styles.container} \
        ${props.inverted ? styles.inverted : ''} \
        ${props.className} \
      `} 
      style={style}
    >
      {props.children}
    </div>
  )
}