export type TasksSliceState = {
  tasks: TaskType[];
  taskEditData?: TaskEditData;
  statuses: StatusType[];
  priorities: PriorityType[];
};

export type TaskType = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  price: number;
  taskTypeId: number;
  taskTypeName: string;
  statusId: number;
  statusName: string;
  statusRgb: string;
  priorityId: number;
  priorityName: string;
  serviceId: number;
  serviceName: string;
  resolutionDatePlan: string;
  initiatorId: number;
  initiatorName: string;
  executorId: number;
  executorName: string;
  executorGroupId: number;
  executorGroupName: string;
  tags: [
    {
      id: number;
      name: string;
    },
  ];
};

export type TaskEditData = TaskType & {
  lifetimeItems: [
    {
      id: 0;
      userName: string;
      lifetimeType: number;
      createdAt: string;
      comment: string;
      fieldName: string;
      oldFieldValue: string;
      newFieldValue: string;
    },
  ];
};

export type StatusType = {
  rgb: string;
  id: number;
  name: string;
};

export type PriorityType = {
  rgb: string;
  id: number;
  name: string;
};
