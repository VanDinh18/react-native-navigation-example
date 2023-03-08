import {persistReducer} from 'redux-persist';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {generatePersistConfig} from 'store/config';

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

const initActions = initSlice.actions;
const initReducer = persistReducer<IState>(
  generatePersistConfig('init', ['data']),
  initSlice.reducer,
);

export {initActions, initReducer};
