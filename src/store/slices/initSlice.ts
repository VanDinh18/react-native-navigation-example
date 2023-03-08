import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IState {
  data: any[];
}

const initialState: IState = {
  data: [],
};

const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload);
    },
    clearData: state => {
      state.data = [];
    },
  },
});

export const {addData, clearData} = initSlice.actions;
export default initSlice.reducer;
