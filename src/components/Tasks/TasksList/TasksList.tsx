import { useSelector } from 'react-redux';
import styles from './TasksList.module.css';
import { RootState, useAppDispatch } from '../../../redux/store';
import { FC, useEffect } from 'react';
import { fetchTasks } from '../../../redux/TasksSlice/slice';
import Task from './Task/Task';

type TasksListProps = {
  handleTaskEdit: (id: number) => void;
};

const TasksList: FC<TasksListProps> = ({ handleTaskEdit }) => {
  const dispatch = useAppDispatch();

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={styles.tasksList}>
      <div className={`${styles.taskRow} ${styles.title}`}>
        <div className={`${styles.Column1} ${styles.title}`}>
          <p className={styles.IdTitle}>ID</p>
        </div>
        <div className={`${styles.Column2} ${styles.title}`}>
          <p>Название</p>
        </div>
        <div className={`${styles.Column3} ${styles.title}`}>
          <p>Статус</p>
        </div>
        <div className={`${styles.Column4} ${styles.title}`}>
          <p>Исполнитель</p>
        </div>
      </div>
      {tasks.map((task) => (
        <Task
          id={task.id}
          name={task.name}
          priorityId={task.priorityId}
          statusId={task.statusId}
          executorName={task.executorName}
          key={task.id}
          handleTaskEdit={() => {
            handleTaskEdit(task.id);
          }}
        />
      ))}
    </div>
  );
};

export default TasksList;
