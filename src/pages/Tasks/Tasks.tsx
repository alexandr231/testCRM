import { useState } from 'react';
import TaskCreate from '../../components/Tasks/TaskForms/TaskCreate';
import TaskEdit from '../../components/Tasks/TaskForms/TaskEdit';
import TasksList from '../../components/Tasks/TasksList/TasksList';
import { useAppDispatch } from '../../redux/store';
import { fetchTaskEditData } from '../../redux/TasksSlice/slice';
import styles from './Tasks.module.css';

enum TaskFormEnum {
  CREATE,
  EDIT,
  NONE,
}

const Tasks = () => {
  const [TaskForm, setTaskForm] = useState<TaskFormEnum>(TaskFormEnum.NONE);
  const dispatch = useAppDispatch();

  const handleCreateButton = () => {
    setTaskForm(TaskFormEnum.CREATE);
  };
  const handleCloseForm = () => {
    setTaskForm(TaskFormEnum.NONE);
  };
  const handleTaskEdit = (id: number) => {
    dispatch(fetchTaskEditData(id));
    setTaskForm(TaskFormEnum.EDIT);
  };

  return (
    <div className={styles.TasksPage}>
      <button className={styles.buttonCreate} onClick={handleCreateButton}>
        Создать заявку
      </button>
      <TasksList handleTaskEdit={handleTaskEdit} />
      {TaskForm === TaskFormEnum.CREATE ? (
        <TaskCreate handleCloseForm={handleCloseForm} />
      ) : TaskForm === TaskFormEnum.EDIT ? (
        <TaskEdit handleCloseForm={handleCloseForm} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Tasks;
