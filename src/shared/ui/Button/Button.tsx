import styles from './Button.module.scss';

interface ButtonProps {
  handleClick: () => void;
}

export default function Button({ handleClick }: ButtonProps) {
  return (
    <button onClick={handleClick} className={styles.button}>
      Regenerate
    </button>
  );
}
