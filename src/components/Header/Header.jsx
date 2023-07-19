import { useState } from 'react';
import clsx from 'clsx';

import { Select } from 'components/ui/Select/Select.jsx';

import styles from './Header.module.scss';

export const Header = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.toLocaleString('default', { month: 'long' });

  const months = Array.from({ length: 12 }, (_, index) => {
    date.setMonth(index);

    return date.toLocaleString('default', { month: 'long' }).slice(0, 3);
  });

  const years = Array.from({ length: 20 }, (_, index) => currentYear - 10 + index);

  const [isActiveYears, setIsActiveYears] = useState(false);
  const [isActiveMonths, setIsActiveMonths] = useState(false);

  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerContainer, styles.container)}>
        <Select
          selectedItem={currentYear}
          className={styles.headerSelect}
          isActive={isActiveYears}
          setIsActive={setIsActiveYears}
          items={years}
        />
        <Select
          selectedItem={currentMonth}
          className={styles.headerSelect}
          isActive={isActiveMonths}
          setIsActive={setIsActiveMonths}
          items={months}
        />
      </div>
    </header>
  );
};
