import { useDispatch } from 'react-redux';
import {  Task } from '../../../store/store';
import  './modalcontentdelete.css';
import { Text } from '../../../components/Text';
import { handleCancel } from '../handleCancel';

export function ModalContentDelete({active}: {active: Task}) {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch({type: 'TASK_DELETE', idOfTask: active.id})
    handleCancel(dispatch);
  }
  return (
    <div className='modalcontent__delete modalcontent'>
      <Text As='h3' size={24} color='#333' weight={300} className='modalcontent__title'>Удалить задчаучаучау?</Text>
          <button className='modalcontent__submit' onClick={handleSubmit}>Удалить</button>
          <button className='modalcontent__cancel' onClick={() => handleCancel(dispatch)}>Отмена</button>
    </div>
  );
}