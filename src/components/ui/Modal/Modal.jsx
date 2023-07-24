import styles from './Modal.module.scss';

export const Modal = ({ active, setActive, className, children }) => {
  return (
    <div className={active && styles.modal} onClick={() => setActive(false)}>
      <div className={`${styles.modalContent} ${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
