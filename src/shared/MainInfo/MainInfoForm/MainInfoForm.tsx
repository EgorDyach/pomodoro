import React, { useState } from 'react';
import './maininfoform.css';
import { useSelector } from 'react-redux';
import { RootState, Task } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { Text } from '../../../components/Text';
const MAX = 10_000_000;


export function MainInfoForm() {
  const [valueOfTask, setValueOfTask] = useState('');
  const [error, setError] = useState('');
  const tasks = useSelector<RootState, Task[]>(state => state.Local.arrayOfTasks)
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueOfTask(event.target.value)
  }

  const generateId = () => {
    let id = Math.floor(Math.random() * MAX);
    while (tasks.find(e => e.id === id) !== undefined || id === 0) {
      id = generateId()
    }
    return id;
  }

  const handleSubmit = () => {
    event?.preventDefault();
    if (valueOfTask.length > 2) {
      dispatch({ type: "ADD_TASK", newTask: { id: generateId(), title: valueOfTask, count: 1 }, isFromLocal: false })
      setValueOfTask('')
      setError('')
    } else {
      setError('Длина добавляемой задачи должна быть больше 2 символов!')
    }
  }
  return (
    <form className='mainInfoForm' onSubmit={handleSubmit}>
      <input type={'text'} className='mainInfoForm__input' value={valueOfTask} onChange={handleChange} placeholder='Название задачи' />
      {error !== '' && <Text As='span' color='red' size={14}>{error}</Text>}
      <button type={'submit'} className='mainInfoForm__submit' >Добавить</button>
    </form>
  );
}
