import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { months, years } from '@/constants/constants.js';
import { setSelectedMonth, setSelectedYear } from '@/store/select/selectSlice.js';
import { Select } from 'components/ui/Select/Select.jsx';

import styles from 'components/Header/Header.module.scss';

export const SelectWrapper = () => {
  const dispatch = useDispatch();
  const { isSelectYear, selectedYear, selectedMonth } = useSelector((state) => state.select);

  const [isActiveYears, setIsActiveYears] = useState(false);
  const [isActiveMonths, setIsActiveMonths] = useState(false);

  return (
    <>
      <Select
        placeholder={selectedYear}
        className={styles.headerSelect}
        onClickOption={(option) => dispatch(setSelectedYear(option))}
        isActive={isActiveYears}
        setIsActive={setIsActiveYears}
        items={years}
      />
      {!isSelectYear && (
        <Select
          placeholder={selectedMonth}
          className={styles.headerSelect}
          onClickOption={(option) => dispatch(setSelectedMonth(option))}
          isActive={isActiveMonths}
          setIsActive={setIsActiveMonths}
          items={months}
        />
      )}
    </>
  );
};
