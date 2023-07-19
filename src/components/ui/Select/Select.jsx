import { useRef, useState } from 'react';
import { useOnClickOutside } from '@/hooks/useOnClickOutside.js';
import clsx from 'clsx';

import arrow from 'assets/icon/arrow.svg';
import styles from './Select.module.scss';

export const Select = ({ className, isActive, setIsActive, items }) => {
  const [activeSelect, setActiveSelect] = useState(2018);
  const selectRef = useRef(null);
  useOnClickOutside(selectRef, () => setIsActive(false));

  const onClickSelect = (year) => {
    setActiveSelect(year);
    setIsActive(false);
  };

  return (
    <div className={clsx(styles.select, className, { [styles.active]: isActive })} ref={selectRef}>
      <div className={styles.selectBtn} onClick={() => setIsActive(!isActive)}>
        <span>{activeSelect}</span>
        <img className={styles.selectIcon} src={arrow} alt="arrow" />
      </div>
      {isActive && (
        <ul className={styles.selectContent}>
          {items.map((year) => (
            <li key={year} className={styles.selectOption} onClick={() => onClickSelect(year)}>
              {year}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
