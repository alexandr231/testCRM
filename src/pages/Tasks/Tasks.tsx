import TaskCreate from '../../components/Tasks/TaskForms/TaskCreate';
import TasksList from '../../components/Tasks/TasksList/TasksList';
import styles from './Tasks.module.css';

const Tasks = () => {
  return (
    <>
      <button className={styles.buttonCreate}>Создать заявку</button>
      <TasksList />
      <TaskCreate />
    </>
  );
};

export default Tasks;
