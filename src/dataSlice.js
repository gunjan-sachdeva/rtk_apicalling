import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    fetchData: state => state,
    fetchDataSuccess: (state, action) => action.payload,
    fetchDataFailure: state => state,
  },
});

export const { fetchData, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export default dataSlice.reducer;
