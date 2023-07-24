import clsx from 'clsx';

import styles from './Modal.module.scss';

export const Modal = ({ active, setActive, className, children }) => {
  return (
    <>
      {active && (
        <div className={active && styles.modal} onClick={() => setActive(false)}>
          <div
            className={clsx(styles.modalContent, className)}
            onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
