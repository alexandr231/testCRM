import { UserType } from './../redux/UsersSlice/types';
import { TaskType, StatusType, PriorityType, TaskEditData } from './../redux/TasksSlice/types';
import axios from 'axios';

const host = axios.create({
  baseURL: 'http://intravision-task.test01.intravision.ru/',
});

export const guid: string = '7f163907-b85a-4bbd-a319-7a3c87d49e0d';

type TasksResponseType = {
  value: TaskType[];
};

export type EditedTaskType = {
  id: number;
  comment?: string;
  statusId: number;
  executorId: number;
};

export const TasksAPI = {
  getTasks() {
    return host
      .get<TasksResponseType>(`odata/tasks?tenantguid=${guid}`)
      .then((response) => response.data.value);
  },
  getTaskByID(id: number) {
    return host.get<TaskEditData>(`api/${guid}/Tasks/${id}`);
  },
  getStatuses() {
    return host.get<StatusType[]>(`api/${guid}/Statuses`);
  },
  getPriorities() {
    return host.get<PriorityType[]>(`api/${guid}/Priorities`);
  },
  createTask(name: string, description: string) {
    return host.post(`/api/${guid}/Tasks`, {
      name,
      description,
    });
  },
  editTask(editedTask: EditedTaskType) {
    return host.put(`api/${guid}/Tasks`, {
      id: editedTask.id,
      comment: editedTask.comment,
      statusId: editedTask.statusId,
      executorId: editedTask.executorId,
    });
  },
};

export const UsersApi = {
  getUsers() {
    return host.get<UserType[]>(`api/${guid}/Users`);
  },
};
