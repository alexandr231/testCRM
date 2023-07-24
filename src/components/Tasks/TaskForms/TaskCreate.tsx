import styles from './TaskForm.module.css';
import CloseIcon from '../../../assets/img/Close.png';
import { FC, useRef } from 'react';
import { TasksAPI } from '../../../api/API';
import { useAppDispatch } from '../../../redux/store';
import { fetchTasks } from '../../../redux/TasksSlice/slice';

type TaskCreateProps = {
  handleCloseForm: () => void;
};
const TaskCreate: FC<TaskCreateProps> = ({ handleCloseForm }) => {
  const nameRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const handleButtonSave = () => {
    if (nameRef.current?.value && descriptionRef.current?.value) {
      TasksAPI.createTask(nameRef.current.value, descriptionRef.current.value).then(() => {
        dispatch(fetchTasks());
        handleCloseForm();
      });
    }
  };

  return (
    <div className={styles.TaskForm}>
      <div className={styles.Header}>
        <p>Новая Заявка</p>
        <img
          className={styles.CloseIcon}
          src={CloseIcon}
          alt="Close icon"
          onClick={handleCloseForm}
        />
      </div>
      <div className={styles.CreateMainContent}>
        <p>Название</p>
        <textarea className={styles.NameTextarea} ref={nameRef} />
        <p>Описание</p>
        <textarea className={styles.DescriptionTextarea} ref={descriptionRef} />
        <button className={styles.ButtonSaveCreate} onClick={handleButtonSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default TaskCreate;
