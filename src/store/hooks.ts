import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {store} from './store';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export {useAppSelector, useAppDispatch, type RootState};
