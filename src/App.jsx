import { AppRouter } from '@/router/AppRouter.jsx';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <AppRouter />
    </div>
  );
}

export default App;
