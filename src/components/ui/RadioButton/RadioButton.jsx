import { useState } from 'react';
import clsx from 'clsx';

import styles from './RadioButton.module.scss';

export const RadioButton = ({ radioItems, onChangeRadio }) => {
  const [selectedRadioItem, setSelectedRadioItem] = useState('');

  const onChangeInput = (item) => {
    setSelectedRadioItem(item);
    onChangeRadio(item);
  };

  const isRadioSelected = (value) => selectedRadioItem === value;

  return (
    <div className={styles.radio}>
      {radioItems.map((item) => (
        <label
          key={item.id}
          className={clsx(styles.radioLabel, { [styles.active]: isRadioSelected(item) })}>
          <input
            type="radio"
            name={item.name}
            value={item.value}
            onChange={() => onChangeInput(item)}
            checked={isRadioSelected(item)}
          />
          <span>{item.label}</span>
        </label>
      ))}
      <span className={styles.radioLine}></span>
    </div>
  );
};
