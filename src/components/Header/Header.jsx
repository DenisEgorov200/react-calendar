import { useState } from 'react';
import clsx from 'clsx';

import { years, months } from 'components/constants/constants.js';
import { Select } from 'components/ui/Select/Select.jsx';
import { RadioButton } from 'components/ui/RadioButton/RadioButton.jsx';

import styles from './Header.module.scss';

export const Header = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.toLocaleString('default', { month: 'long' }).slice(0, 3);

  const [isActiveYears, setIsActiveYears] = useState(false);
  const [isActiveMonths, setIsActiveMonths] = useState(false);

  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerContainer, styles.container)}>
        <Select
          defaultItem={currentYear}
          className={styles.headerSelect}
          isActive={isActiveYears}
          setIsActive={setIsActiveYears}
          items={years}
        />
        <Select
          defaultItem={currentMonth}
          className={styles.headerSelect}
          isActive={isActiveMonths}
          setIsActive={setIsActiveMonths}
          items={months}
        />
        <RadioButton />
      </div>
    </header>
  );
};
