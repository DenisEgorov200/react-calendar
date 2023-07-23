import clsx from 'clsx';

import { SelectWrapper } from 'components/SelectWrapper/SelectWrapper.jsx';
import { RadioButton } from 'components/ui/RadioButton/RadioButton.jsx';

import styles from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { setSelectedYear } from '@/store/select/selectSlice.js';

const radioItems = [
  { id: 1, name: 'date', value: 'month', label: 'month', checked: false },
  { id: 2, name: 'date', value: 'year', label: 'year', checked: false },
];
const radioItems1 = [
  { id: 1, name: 'date', value: 'day', label: 'day', checked: false },
  { id: 2, name: 'date', value: 'month', label: 'month', checked: false },
];

export const Header = () => {
  const dispatch = useDispatch();

  const onChangeRadio = (selectedItem) => {
    dispatch(setSelectedYear(selectedItem.value));
  };

  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerContainer, styles.container)}>
        <SelectWrapper />
        <RadioButton radioItems={radioItems} onChangeRadio={onChangeRadio} />
        <RadioButton radioItems={radioItems1} onChangeRadio={onChangeRadio} />
      </div>
    </header>
  );
};
