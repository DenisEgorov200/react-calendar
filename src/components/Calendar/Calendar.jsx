import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Header } from 'components/Header/Header.jsx';
import { CalendarDate } from 'components/CalendarDate/CalendarDate.jsx';
import { CalendarMonth } from 'components/CalendarMonth/CalendarMonth.jsx';

import styles from './Calendar.module.scss';

export const Calendar = () => {
  const { isSelectYear } = useSelector((state) => state.select);

  return (
    <div className={styles.calendar}>
      <Header />
      <div className={clsx(styles.calendarContainer, styles.container)}>
        {!isSelectYear ? <CalendarDate /> : <CalendarMonth />}
      </div>
    </div>
  );
};
