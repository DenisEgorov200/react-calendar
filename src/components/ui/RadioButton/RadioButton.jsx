import { useState } from 'react';
import clsx from 'clsx';

import styles from './RadioButton.module.scss';

export const RadioButton = ({ radioItems }) => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('');
  const isRadioSelected = (value) => selectedRadioBtn === value;

  const onChangeInput = (item) => {
    setSelectedRadioBtn(item);
    console.log(item);
  };

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
