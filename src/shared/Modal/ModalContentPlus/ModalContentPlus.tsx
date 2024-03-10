import React, { useState } from 'react';
import './modalcontentplus.css';
import { Text } from '../../../components/Text';
import { SET_ACTIVE_MENU_ID, Task } from '../../../store/store';
import { useDispatch } from 'react-redux';

export function ModalContentPlus({active}: {active: Task}) {
  const [number, setNumber] = useState<number>(1);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    const value = Number(event.target.value);
    if ( Number.isInteger(value)) {
      if (value < 0 || value > (99 - active.count)) {
        setNumber(number);
      } else {
        setNumber(value);
      }
    }
  };
  const handleCancel = () => {
    dispatch({type: "IS_NOT_OPEN"})
    document.body.style.overflow = 'scroll'
    dispatch({type: SET_ACTIVE_MENU_ID, activeMenuID: 0})
  }
  const handleSubmit = () => {
    dispatch({type: 'TASK_COUNT_PLUS', countPlus: number, idOfTask: active.id})
    handleCancel();
  }
  return (
    <div className='modalcontent__plus modalcontent'>
      <Text As='h3' size={24} color='#333' weight={300} className='modalcontent__title'>Увеличить кол-во "Помидоров"?</Text>
          <Text As='span' size={16} weight={300} color='#444444'>Сумарное число "Помидорок" должно быть неотрицательным и меньше 99 (Нужно же себя беречь!)</Text>
          <Text As='span' size={20} weight={300} color='#999'>Сейчас "Помидорок": {active.count}</Text>
          <input className='modalcontent__input' min={0} max={99 - active.count} type="number" onChange={handleChange} value={number} />
          <button className='modalcontent__submit' onClick={handleSubmit}>Увеличить</button>
          <button className='modalcontent__cancel' onClick={handleCancel}>Отмена</button>
    </div>
  );
}
