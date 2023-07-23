import { UsersApi } from './../../api/API';
import { UsersSliceState } from './types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('tasks/fetchUsers', async () => {
  const { data } = await UsersApi.getUsers();
  return data;
});

const initialState: UsersSliceState = {
  users: [],
};

export const tasksSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.users = [];
    });
  },
});

// Action creators are generated for each case reducer function
//export const {} = tasksSlice.actions;

export default tasksSlice.reducer;
