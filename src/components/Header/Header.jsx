import { useState } from 'react';
import clsx from 'clsx';

import { SelectWrapper } from 'components/SelectWrapper/SelectWrapper.jsx';
import { RadioButton } from 'components/ui/RadioButton/RadioButton.jsx';

import styles from './Header.module.scss';

const radioItems = ['month', 'year'];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerContainer, styles.container)}>
        <SelectWrapper />
        <RadioButton radioItems={radioItems} />
      </div>
    </header>
  );
};
