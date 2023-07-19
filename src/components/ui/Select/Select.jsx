import { useState } from 'react';

import clsx from 'clsx';
import arrow from 'assets/icon/arrow.svg';
import styles from './Select.module.scss';

export const Select = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={clsx(styles.select, { [styles.active]: isActive })}>
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
