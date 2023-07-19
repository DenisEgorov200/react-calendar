import { useState } from 'react';
import clsx from 'clsx';

import { Select } from 'components/ui/Select/Select.jsx';

import styles from './Header.module.scss';

const yearArray = ['2018', '2019', '2020', '2021'];

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerContainer, styles.container)}>
        {}
        <Select
          className={styles.headerSelect}
          isActive={isActive}
          setIsActive={setIsActive}
          items={yearArray}
        />
        {/*<Select className={styles.headerSelect} isActive={isActive} setIsActive={setIsActive} />*/}
      </div>
    </header>
  );
};
