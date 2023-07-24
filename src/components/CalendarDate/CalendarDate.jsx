import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import clsx from 'clsx';

import { setSelectedItem } from '@/store/select/selectSlice.js';
import { weekDays } from '@/constants/constants.js';

import styles from './CalendarDate.module.scss';

export const CalendarDate = () => {
  const dispatch = useDispatch();
  const today = startOfToday();
  const [currentDate, setCurrentDate] = useState(format(today, 'MMM-yyyy'));
  const { selectedMonth, selectedYear } = useSelector((state) => state.select);
  const firstDayCurrentDate = parse(currentDate, 'MMM-yyyy', new Date());

  const calendarDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentDate),
    end: endOfWeek(endOfMonth(firstDayCurrentDate)),
  });

  const onClickDay = (day) => {
    dispatch(setSelectedItem(day));
  };

  useEffect(() => {
    setCurrentDate(`${selectedMonth}-${selectedYear}`);
  }, [selectedMonth, selectedYear]);

  return (
    <>
      <ul className={styles.calendarNames}>
        {weekDays.map((weekDay) => (
          <li key={weekDay} className={styles.calendarName}>
            {weekDay}
          </li>
        ))}
      </ul>
      <ul className={styles.calendarNumbers}>
        {calendarDays.map((day, dayIdx) => (
          <li
            key={dayIdx}
            className={clsx(
              styles.calendarNumber,
              {
                [styles.inactive]: !isSameMonth(day, firstDayCurrentDate),
              },
              // { [styles.active]: day === selectedDate },
              { [styles.today]: isToday(day) },
            )}
            onClick={() => onClickDay(day)}>
            {format(day, 'd')}
          </li>
        ))}
      </ul>
    </>
  );
};
