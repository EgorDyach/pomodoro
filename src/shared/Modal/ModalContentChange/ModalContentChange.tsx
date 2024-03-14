import React, { useState } from 'react';
import './modalcontentchange.css';
import { useDispatch } from 'react-redux';
import { Task } from '../../../store/store';
import { Text } from '../../../components/Text';
import { handleCancel } from '../handleCancel';

export function ModalContentChange({ active }: { active: Task }) {
  const [newNameOfTask, setNewNameOfTask] = useState(active.title);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNameOfTask(event.target.value)
  };
  const handleSubmit = () => {
    if (newNameOfTask.length <= 2) {
      setError('Длина должна быть не меньше 2 символов!')
    } else {
      dispatch({ type: 'TASK_CHANGE_NAME', newName: newNameOfTask, idOfTask: active.id })
      handleCancel(dispatch);
    }
  }
  return (
    <div className='modalcontent__change modalcontent'>
      <Text As='h3' size={24} color='#333' weight={300} className='modalcontent__title'>Редактировать задчаучаучау?</Text>
      <input className='modalcontent__input modalcontent__input-change' onChange={handleChange} value={newNameOfTask} />
      {error !== '' && <Text As='span' color='red' size={14}>{error}</Text>}
      <button className='modalcontent__submit' onClick={handleSubmit}>Изменить</button>
      <button className='modalcontent__cancel' onClick={() => handleCancel(dispatch)}>Отмена</button>
    </div>
  );
}
