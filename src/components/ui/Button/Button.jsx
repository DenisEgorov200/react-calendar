import clsx from 'clsx';

import styles from './Button.module.scss';

export const Button = ({ className, children }) => {
  return <button className={clsx(className, styles.button)}>{children}</button>;
};
