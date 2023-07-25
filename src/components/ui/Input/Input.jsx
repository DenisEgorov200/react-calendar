import clsx from 'clsx';

import styles from './Input.module.scss';

export const Input = ({ type, defaultValue, value, onChange, className, placeholder }) => {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      className={clsx(styles.input, className)}
      placeholder={placeholder}
    />
  );
};
