import { useDispatch, useSelector } from 'react-redux';
import { startOfToday } from 'date-fns';
import clsx from 'clsx';

import { setSelectedMonth } from '@/store/select/selectSlice.js';
import { months } from '@/constants/constants.js';

import styles from './CalendarMonth.module.scss';

export const CalendarMonth = () => {
  const dispatch = useDispatch();
  const { selectedMonth } = useSelector((state) => state.select);
  const today = startOfToday();

  const onClickMonth = (month) => {
    dispatch(setSelectedMonth(month));
  };

  return (
    <ul className={styles.calendarNames}>
      {months.map((month, monthIdx) => (
        <li
          key={month}
          className={clsx(
            styles.calendarItem,
            { [styles.active]: month === selectedMonth },
            { [styles.today]: today.getMonth() === monthIdx },
          )}
          onClick={() => onClickMonth(month)}>
          {month}
        </li>
      ))}
    </ul>
  );
};
