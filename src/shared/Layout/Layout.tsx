import  { ReactNode, useEffect } from 'react';
import { loadState, saveState } from '../../store/localStorage';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './layout.css';

export function Layout({children}: {children: ReactNode}) {
  const dispatch = useDispatch()
  const stringFromLocal = loadState()
  const state = useSelector<RootState, RootState>(state => state);
  useEffect(() => {
    if (stringFromLocal !== '') {
      console.log(stringFromLocal)
      const stateFromLocal = JSON.parse(stringFromLocal)
      dispatch({type: 'SET_FROM_LOCAL', stateFromLocal})
    }
  }, [stringFromLocal, dispatch])
  useEffect(() => {
    if (!state.isFromLocal) {
      saveState(state)
    }
  }, [state])
  return (
    <div className={state.Local.appTheme === "dark" ? 'darkTheme layout' : 'lightTheme layout'}>
      {children}
    </div>
  );
}
