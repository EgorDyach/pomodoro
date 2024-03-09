import { RootState } from './store';
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
        return '';
      }
      return serializedState;
    } catch (err) {
      return '';
    }
  };
  
  export const saveState = (state: RootState) => {
    try {
      const serializedState = JSON.stringify(state.Local);
      localStorage.setItem("state", serializedState);
    } catch (err) {
        console.log(123)
    }
  };
  