import clsx from 'clsx';

import styles from './Button.module.scss';

export const Button = ({ className, onClick, children }) => {
  return (
    <button className={clsx(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  );
};
