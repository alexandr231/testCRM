import { TasksAPI } from './../../api/API';
import { TasksSliceState } from './types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const tasks = await TasksAPI.getTasks();
  return tasks;
});

export const fetchTaskEditData = createAsyncThunk('tasks/fetchTaskEditData', async (id: number) => {
  const { data } = await TasksAPI.getTaskByID(id);
  return data;
});

export const fetchStatuses = createAsyncThunk('tasks/fetchStatuses', async () => {
  const { data } = await TasksAPI.getStatuses();
  return data;
});

export const fetchPriorities = createAsyncThunk('tasks/fetchPriorities', async () => {
  const { data } = await TasksAPI.getPriorities();
  return data;
});

const initialState: TasksSliceState = {
  tasks: [],
  statuses: [],
  priorities: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.tasks = [];
    });
    builder.addCase(fetchTaskEditData.fulfilled, (state, action) => {
      state.taskEditData = action.payload;
    });
    builder.addCase(fetchTaskEditData.rejected, (state) => {
      state.taskEditData = undefined;
    });
    builder.addCase(fetchStatuses.fulfilled, (state, action) => {
      state.statuses = action.payload;
    });
    builder.addCase(fetchStatuses.rejected, (state) => {
      state.statuses = [];
    });
    builder.addCase(fetchPriorities.fulfilled, (state, action) => {
      state.priorities = action.payload;
    });
    builder.addCase(fetchPriorities.rejected, (state) => {
      state.priorities = [];
    });
  },
});

// Action creators are generated for each case reducer function
//export const {} = tasksSlice.actions;

export default tasksSlice.reducer;
