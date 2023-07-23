import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tasks from './TasksSlice/slice';
import users from './UsersSlice/slice';

export const store = configureStore({
  reducer: {
    tasks,
    users,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
