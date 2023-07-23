import { RootState } from './../redux/store';
import { useSelector } from 'react-redux';

export const useStatusById = (id: number) => {
  const statuses = useSelector((state: RootState) => state.tasks.statuses);
  return statuses.find((status) => status.id === id);
};

export const usePrioritiesById = (id: number) => {
  const priorities = useSelector((state: RootState) => state.tasks.priorities);
  return priorities.find((priority) => priority.id === id);
};
