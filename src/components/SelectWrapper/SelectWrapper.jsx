import { useState } from 'react';

import { months, years } from '@/constants/constants.js';
import { Select } from 'components/ui/Select/Select.jsx';

import styles from 'components/Header/Header.module.scss';
import { useSelector } from 'react-redux';

export const SelectWrapper = () => {
  const { isSelectYear } = useSelector((state) => state.select);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toLocaleString('default', { month: 'long' }).slice(0, 3),
  );

  const [isActiveYears, setIsActiveYears] = useState(false);
  const [isActiveMonths, setIsActiveMonths] = useState(false);

  return (
    <>
      <Select
        placeholder={currentYear}
        className={styles.headerSelect}
        onClickOption={(option) => setCurrentYear(option)}
        isActive={isActiveYears}
        setIsActive={setIsActiveYears}
        items={years}
      />
      {!isSelectYear && (
        <Select
          placeholder={currentMonth}
          className={styles.headerSelect}
          onClickOption={(option) => setCurrentMonth(option)}
          isActive={isActiveMonths}
          setIsActive={setIsActiveMonths}
          items={months}
        />
      )}
    </>
  );
};
