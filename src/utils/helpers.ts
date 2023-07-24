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

export const getNormalDate = (date: string) => {
  const parseDate = date.split('T');
  const dateNumber = parseDate[0].split('-');
  const oldTime = parseDate[1].split(':');
  let month: string;

  switch (dateNumber[1]) {
    case '01':
      month = 'января';
      break;
    case '02':
      month = 'февраля';
      break;
    case '03':
      month = 'марта';
      break;
    case '04':
      month = 'апреля';
      break;
    case '05':
      month = 'мая';
      break;
    case '06':
      month = 'июня';
      break;
    case '07':
      month = 'июля';
      break;
    case '08':
      month = 'августа';
      break;
    case '09':
      month = 'сентября';
      break;
    case '10':
      month = 'октября';
      break;
    case '11':
      month = 'ноября';
      break;
    case '12':
      month = 'декабря';
      break;
    default:
      month = '...';
  }
  const newDate = `${dateNumber[2]} ${month}, ${oldTime[0]}:${oldTime[1]}`;
  return newDate;
};

export const getOnlyDate = (date: string) => {
  const newDate = date.split('T')[0].split('-');
  return `${newDate[2]}.${newDate[1]}.${newDate[0]} г.`;
};
