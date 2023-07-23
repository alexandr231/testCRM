import { FC } from 'react';
import { usePrioritiesById, useStatusById } from '../../../../utils/helpers';
import styles from '../TasksList.module.css';

type TaskPropsType = {
  id: number;
  name: string;
  priorityId: number;
  statusId: number;
  executorName: string;
};
const Task: FC<TaskPropsType> = ({ id, name, priorityId, statusId, executorName }) => {
  const status = useStatusById(statusId);
  const priority = usePrioritiesById(priorityId);

  return (
    <div className={styles.taskRow}>
      <div className={styles.Column1}>
        <p className={styles.taskId} style={{ borderLeft: `5px solid ${status?.rgb}` }}>
          {id}
        </p>
      </div>
      <div className={styles.Column2}>
        <p className={styles.taskName}>{name}</p>
      </div>
      <div className={styles.Column3}>
        <p style={{ backgroundColor: `${priority?.rgb}` }} className={styles.taskStatus}>
          {priority?.name}
        </p>
      </div>
      <div className={styles.Column4}>
        <p className={styles.taskExecutor}>{executorName}</p>
      </div>
    </div>
  );
};

export default Task;
