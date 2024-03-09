import React from 'react';
import  './maininfoform.css';
import { useSelector } from 'react-redux';
import { ADD_TASK, RootState, Task } from '../../../store/store';
import { useDispatch } from 'react-redux';
const MAX = 100_000;


export function MainInfoForm() {
  const valueOfTask = useSelector<RootState, string>(state => state.Local.nameOfTask);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'SET_NAME_OF_TASK', Local: {nameOfTask: event.target.value}, isFromLocal: false})
  }

  const tasks = useSelector<RootState, Task[]>(state => state.Local.arrayOfTasks)
  const generateId = () => {
      let id =  Math.floor(Math.random() * MAX);
      while (tasks.find(e => e.id === id) !== undefined) {
          id = generateId()
      }
      return id;
  }

  const handleSubmit = () => {
    event?.preventDefault();
    dispatch({type: ADD_TASK, newTask: {id: generateId(), title: valueOfTask, count: 1}, isFromLocal: false})
    dispatch({type: 'SET_NAME_OF_TASK', Local: {nameOfTask: ''}, isFromLocal: false})
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type={'text'} value={valueOfTask} onChange={handleChange} placeholder='Название задачи' />
      <button type={'submit'} >Добавить</button>
    </form>
  );
}
