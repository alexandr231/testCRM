import styles from './SelectInOrder.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { FC } from 'react';
import { UserType } from '../../../../redux/UsersSlice/types';

type SelectExecutorProps = {
  setExecutorOpen: (value: boolean) => void;
  setExecutor: (user: UserType) => void;
};
const SelectExecutor: FC<SelectExecutorProps> = ({ setExecutorOpen, setExecutor }) => {
  const users = useSelector((state: RootState) => state.users.users);
  return (
    <div className={styles.List}>
      {users.map((user) => (
        <div
          className={styles.Item}
          key={user.id}
          onClick={() => {
            setExecutorOpen(false);
            setExecutor(user);
          }}>
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default SelectExecutor;
