import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectByMonth, setSelectByYear } from '@/store/select/selectSlice.js';
import { months, years } from 'components/constants/constants.js';
import { Select } from 'components/ui/Select/Select.jsx';

import styles from 'components/Header/Header.module.scss';

export const SelectWrapper = () => {
  const dispatch = useDispatch();
  const { currentYear } = useSelector((state) => state.select);
  const { currentMonth } = useSelector((state) => state.select);

  const [isActiveYears, setIsActiveYears] = useState(false);
  const [isActiveMonths, setIsActiveMonths] = useState(false);

  return (
    <>
      <Select
        defaultItem={currentYear}
        className={styles.headerSelect}
        onClickOption={(option) => dispatch(setSelectByYear(option))}
        isActive={isActiveYears}
        setIsActive={setIsActiveYears}
        items={years}
      />
      <Select
        defaultItem={currentMonth}
        className={styles.headerSelect}
        onClickOption={(option) => dispatch(setSelectByMonth(option))}
        isActive={isActiveMonths}
        setIsActive={setIsActiveMonths}
        items={months}
      />
    </>
  );
};
