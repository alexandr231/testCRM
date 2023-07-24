import { FC } from 'react';
import { usePrioritiesById, useStatusById } from '../../../../utils/helpers';
import styles from '../TasksList.module.css';

type TaskPropsType = {
  id: number;
  name: string;
  priorityId: number;
  statusId: number;
  executorName: string;
  handleTaskEdit: () => void;
};
const Task: FC<TaskPropsType> = ({
  id,
  name,
  priorityId,
  statusId,
  executorName,
  handleTaskEdit,
}) => {
  const status = useStatusById(statusId);
  const priority = usePrioritiesById(priorityId);

  return (
    <div className={styles.taskRow} onClick={handleTaskEdit}>
      <div className={styles.Column1}>
        <p className={styles.taskId} style={{ borderLeft: `5px solid ${priority?.rgb}` }}>
          {id}
        </p>
      </div>
      <div className={styles.Column2}>
        <p className={styles.taskName}>{name}</p>
      </div>
      <div className={styles.Column3}>
        <div style={{ backgroundColor: `${status?.rgb}` }} className={styles.taskStatus}>
          <p className={styles.statusText}>{status?.name}</p>
        </div>
      </div>
      <div className={styles.Column4}>
        <p className={styles.taskExecutor}>{executorName}</p>
      </div>
    </div>
  );
};

export default Task;
