import { FC, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store';
import styles from './TaskForm.module.css';
import CloseIcon from '../../../assets/img/Close.png';
import { getNormalDate, getOnlyDate } from '../../../utils/helpers';
import CalendarIcon from '../../../assets/img/Calendar.png';
import SelectExecutor from './SelectInOrder/SelectExecutor';
import { UserType } from '../../../redux/UsersSlice/types';
import { StatusType } from '../../../redux/TasksSlice/types';
import SelectStatus from './SelectInOrder/SelectStatus';
import { EditedTaskType, TasksAPI } from '../../../api/API';
import ArrowDown from '../../../assets/img/arrowDown.png';
import { fetchTasks } from '../../../redux/TasksSlice/slice';
import { fetchUsers } from '../../../redux/UsersSlice/slice';

type TaskEditProps = {
  handleCloseForm: () => void;
};

const TaskEdit: FC<TaskEditProps> = ({ handleCloseForm }) => {
  const TaskEditData = useSelector((state: RootState) => state.tasks.taskEditData);
  const dispatch = useAppDispatch();

  const executorRef = useRef<UserType | null>(null);
  const statusRef = useRef<StatusType | null>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const [isStatusOpen, setStatusOpen] = useState<boolean>(false);
  const [isExecutorOpen, setExecutorOpen] = useState<boolean>(false);

  const getResolutionDate = () => {
    if (TaskEditData?.resolutionDatePlan) {
      return getOnlyDate(TaskEditData?.resolutionDatePlan);
    }
  };

  const setExecutor = (user: UserType) => {
    executorRef.current = user;
  };

  const setStatus = (status: StatusType) => {
    statusRef.current = status;
  };

  const handleButtonSave = () => {
    if (TaskEditData) {
      const editedFields: EditedTaskType = {
        id: TaskEditData?.id,
        executorId: TaskEditData.executorId,
        statusId: TaskEditData.statusId,
      };

      if (executorRef.current?.id) {
        editedFields.executorId = executorRef.current?.id;
      }
      if (statusRef.current?.id) {
        editedFields.statusId = statusRef.current?.id;
      }
      if (commentRef.current?.value) {
        editedFields.comment = commentRef.current.value;
      }
      TasksAPI.editTask(editedFields).then(() => {
        dispatch(fetchTasks());
        handleCloseForm();
      });
    }
  };

  return (
    <div className={styles.TaskForm}>
      <div className={styles.Header}>
        <div className={styles.HeaderContent}>
          <p className={styles.EditFormId}>№ {TaskEditData?.id.toLocaleString()}</p>
          <p className={styles.EditFormName}>{TaskEditData?.name}</p>
        </div>
        <img
          className={styles.CloseIcon}
          src={CloseIcon}
          alt="Close icon"
          onClick={handleCloseForm}
        />
      </div>
      <div className={styles.EditMainContent}>
        <div className={styles.EditColumn1}>
          <p className={styles.Label}>Описание</p>
          <p className={styles.DescriptionEdit}>{TaskEditData?.description}</p>
          <p className={styles.Label}>Добавление комментариев</p>
          <textarea className={styles.AddComment} ref={commentRef}></textarea>
          <button className={styles.ButtonSaveEdit} onClick={handleButtonSave}>
            Сохранить
          </button>
          {TaskEditData?.lifetimeItems.map((item) => {
            if (item.comment) {
              return (
                <div className={styles.CommentBlock} key={item.id}>
                  <div className={styles.userPic}></div>
                  <div className={styles.width100}>
                    <p className={styles.CommentUserName}>{item.userName}</p>
                    <p className={styles.CommentDate}>
                      {getNormalDate(item.createdAt)} прокомментировал
                    </p>
                    <p className={styles.Comment}>{item.comment}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className={styles.EditColumn2}>
          {isStatusOpen ? (
            <SelectStatus setStatus={setStatus} setStatusOpen={setStatusOpen} />
          ) : (
            <div
              className={styles.EditFormStatus}
              onClick={() => {
                setStatusOpen(true);
              }}>
              <div
                className={styles.StatusCircle}
                style={{
                  backgroundColor: statusRef.current
                    ? `${statusRef.current.rgb}`
                    : `${TaskEditData?.statusRgb}`,
                }}></div>
              {statusRef.current ? statusRef.current.name : TaskEditData?.statusName}
              <img src={ArrowDown} alt="arrow down icon" />
            </div>
          )}
          <p className={styles.Column2Label}>Заявитель</p>
          <p className={`${styles.Column2Text} ${styles.name}`}>{TaskEditData?.initiatorName}</p>
          <p className={styles.Column2Label}>Создана</p>
          <p className={`${styles.Column2Text} ${styles.created}`}>{TaskEditData?.initiatorName}</p>
          <p className={styles.Column2Label}>Исполнитель</p>
          {isExecutorOpen ? (
            <SelectExecutor setExecutorOpen={setExecutorOpen} setExecutor={setExecutor} />
          ) : (
            <p
              className={`${styles.Column2Text} ${styles.executor}`}
              onClick={() => {
                dispatch(fetchUsers());
                setExecutorOpen(true);
              }}>
              {executorRef.current ? executorRef.current.name : TaskEditData?.executorName}
            </p>
          )}
          <p className={styles.Column2Label}>Приоритет</p>
          <p className={`${styles.Column2Text} ${styles.priority}`}>{TaskEditData?.priorityName}</p>
          <p className={styles.Column2Label}>Срок</p>
          <div className={`${styles.Column2Text} ${styles.time}`}>
            <img src={CalendarIcon} alt="Calendar icon" />
            <p>{getResolutionDate()}</p>
          </div>
          <p className={styles.Column2Label}>Теги</p>
          <div className={styles.tagsBlock}>
            {TaskEditData?.tags.map((tag) => (
              <div className={styles.TaskTag} key={tag.id}>
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskEdit;
