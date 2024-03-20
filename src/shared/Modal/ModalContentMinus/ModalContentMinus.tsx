import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  Task } from '../../../store/store';
import './modalcontentminus.css';
import { Text } from '../../../components/Text';
import { handleCancel } from '../handleCancel';

export function ModalContentMinus({ active }: { active: Task }) {
  const [number, setNumber] = useState<number>(1);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (Number.isInteger(value)) {
      if (value < 0 || value > (active.count - active.activeTomato)) {
        setNumber(number);
      } else {
        setNumber(value);
      }
    }
  };
  const handleSubmit = () => {
    dispatch({ type: 'TASK_COUNT_MINUS', countMinus: number, idOfTask: active.id })
    handleCancel(dispatch);
  }
  return (
    <div className='modalcontent__plus modalcontent'>
      <Text As='h3' size={24} color='#333' weight={300} className='modalcontent__title'>Уменьшить кол-во "Помидоров"?</Text>
      <Text As='span' size={16} weight={300} color='#444444'>Сумарное число "Помидорок" должно быть неотрицательным и меньше 99 (Нужно же себя беречь!)</Text>
      <Text As='span' size={20} weight={300} color='#999'>Сейчас "Помидорок": {active.count}</Text>
      <input className='modalcontent__input' min={0} max={99 - active.count} type="number" onChange={handleChange} value={number} />
      <button className='modalcontent__submit' onClick={handleSubmit}>Уменьшить</button>
      <button className='modalcontent__cancel' onClick={() => {handleCancel(dispatch)}}>Отмена</button>
    </div>
  );
}
