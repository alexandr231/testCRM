import styles from './SelectInOrder.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { StatusType } from '../../../../redux/TasksSlice/types';
import { FC } from 'react';

type SelectStatusrProps = {
  setStatusOpen: (value: boolean) => void;
  setStatus: (user: StatusType) => void;
};
const SelectStatus: FC<SelectStatusrProps> = ({ setStatus, setStatusOpen }) => {
  const statuses = useSelector((state: RootState) => state.tasks.statuses);

  return (
    <div className={styles.List}>
      {statuses.map((status) => (
        <div
          className={styles.Item}
          key={status.id}
          onClick={() => {
            setStatusOpen(false);
            setStatus(status);
          }}>
          <div
            className={styles.StatusCircle}
            style={{
              backgroundColor: `${status.rgb}`,
            }}></div>
          {status.name}
        </div>
      ))}
    </div>
  );
};

export default SelectStatus;
