import { useState } from 'react';
import clsx from 'clsx';

import styles from './RadioButton.module.scss';

export const RadioButton = ({ radioItems, onChangeInput, selectedRadioBtn }) => {
  const isRadioSelected = (value) => selectedRadioBtn === value;

  return (
    <div className={styles.radio}>
      {radioItems.map((item) => (
        <label
          key={item}
          className={clsx(styles.radioLabel, { [styles.active]: isRadioSelected(item) })}>
          <input
            type="radio"
            name="date"
            value={item}
            onChange={() => onChangeInput(item)}
            checked={isRadioSelected(item)}
          />
          <span>{item}</span>
        </label>
      ))}
      <span className={styles.radioLine}></span>
    </div>
  );
};
