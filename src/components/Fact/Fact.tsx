import { IFact } from '@/shared/types/api';
import styles from './Fact.module.scss';

interface Props {
  fact: IFact;
}

export default function Fact({ fact }: Props) {
  return (
    <div className={styles.fact}>
      <h4>{fact.fact}</h4>
      <p>{fact.length}</p>
    </div>
  );
}
