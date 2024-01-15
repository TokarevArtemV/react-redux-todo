import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import css from './App.module.css';
import { StatusFilter } from './StatusFilter/StatusFilter';

export const App = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
