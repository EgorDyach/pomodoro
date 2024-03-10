import { useDispatch } from 'react-redux';
import { SET_ACTIVE_MENU_ID, Task } from '../../../store/store';
import  './modalcontentdelete.css';
import { Text } from '../../../components/Text';

export function ModalContentDelete({active}: {active: Task}) {
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch({type: "IS_NOT_OPEN"})
    document.body.style.overflow = 'scroll'
    dispatch({type: SET_ACTIVE_MENU_ID, activeMenuID: 0})
  }
  const handleSubmit = () => {
    dispatch({type: 'TASK_DELETE', idOfTask: active.id})
    handleCancel();
  }
  return (
    <div className='modalcontent__delete modalcontent'>
      <Text As='h3' size={24} color='#333' weight={300} className='modalcontent__title'>Удалить задчаучаучау?</Text>
          <button className='modalcontent__submit' onClick={handleSubmit}>Удалить</button>
          <button className='modalcontent__cancel' onClick={handleCancel}>Отмена</button>
    </div>
  );
}