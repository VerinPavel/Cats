import styles from './Pagination.module.scss';

interface PaginationProps {
  onPrevPage: () => void;
  onNextPage: () => void;
  disabled: boolean;
}

export default function Pagination({
  onPrevPage,
  onNextPage,
  disabled,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <button onClick={onPrevPage} disabled={disabled}>
        ◀
      </button>
      <button onClick={onNextPage}>▶</button>
    </div>
  );
}
