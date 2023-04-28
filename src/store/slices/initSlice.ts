import {persistReducer} from 'redux-persist';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {generatePersistConfig} from 'store/config';

interface IState {
  data: any[];
  token?: string;
}

const initialState: IState = {
  data: [],
  token: undefined,
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
    setToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
  },
});

const initActions = initSlice.actions;
const initReducer = persistReducer<IState>(
  generatePersistConfig('init', ['data', 'token']),
  initSlice.reducer,
);

export {initActions, initReducer};
