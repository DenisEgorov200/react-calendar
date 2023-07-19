import { useRef } from 'react';

import clsx from 'clsx';
import arrow from 'assets/icon/arrow.svg';
import styles from './Select.module.scss';
import { useOnClickOutside } from '@/hooks/useOnClickOutside.js';

export const Select = ({ isActive, setIsActive }) => {
  const selectRef = useRef(null);
  useOnClickOutside(selectRef, setIsActive);

  return (
    <div className={clsx(styles.select, { [styles.active]: isActive })} ref={selectRef}>
      <div className={styles.selectBtn} onClick={() => setIsActive(!isActive)}>
        <span>2021</span>
        <img className={styles.selectIcon} src={arrow} alt="arrow" />
      </div>
      {isActive && (
        <ul className={styles.selectContent}>
          <li className={styles.selectOption}>2016</li>
          <li className={styles.selectOption}>2017</li>
          <li className={styles.selectOption}>2018</li>
          <li className={styles.selectOption}>2019</li>
          <li className={styles.selectOption}>2018</li>
          <li className={styles.selectOption}>2019</li>
          <li className={styles.selectOption}>2018</li>
          <li className={styles.selectOption}>2019</li>
          <li className={styles.selectOption}>2020</li>
        </ul>
      )}
    </div>
  );
};
