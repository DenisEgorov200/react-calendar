import { useState } from 'react';

import { months, years } from 'components/constants/constants.js';
import { Select } from 'components/ui/Select/Select.jsx';

import styles from 'components/Header/Header.module.scss';

export const SelectWrapper = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toLocaleString('default', { month: 'long' }).slice(0, 3),
  );

  const [isActiveYears, setIsActiveYears] = useState(false);
  const [isActiveMonths, setIsActiveMonths] = useState(false);

  return (
    <>
      <Select
        defaultItem={currentYear}
        className={styles.headerSelect}
        onClickOption={(option) => setCurrentYear(option)}
        isActive={isActiveYears}
        setIsActive={setIsActiveYears}
        items={years}
      />
      <Select
        defaultItem={currentMonth}
        className={styles.headerSelect}
        onClickOption={(option) => setCurrentMonth(option)}
        isActive={isActiveMonths}
        setIsActive={setIsActiveMonths}
        items={months}
      />
    </>
  );
};
