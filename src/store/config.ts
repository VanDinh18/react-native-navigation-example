import {MMKV} from 'react-native-mmkv';
import {Storage} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const storage = new MMKV();

export const mmkvStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export const generatePersistConfig = (key: string, whitelist: string[]) => {
  return {
    key,
    whitelist,
    version: 1,
    debug: __DEV__,
    storage: mmkvStorage,
    stateReconciler: autoMergeLevel2,
  };
};
