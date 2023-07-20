import { Header } from 'components/Header/Header.jsx';
import { Calendar } from 'components/Calendar/Calendar.jsx';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Calendar />
    </div>
  );
}

export default App;
