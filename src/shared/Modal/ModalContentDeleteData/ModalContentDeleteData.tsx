import  './modalcontentdeletedata.css';
import { Text } from '../../../components/Text';
import { handleCancel } from '../handleCancel';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function ModalContentDeleteData() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.clear();
    navigate('/');
    location.reload();
  }
  return (
    <div className='modalcontent__delete modalcontent'>
      <Text As='h3' size={24} color='#333' weight={300} className='modalcontent__title'>Вы уверены что хотите стереть данные?</Text>
      <Text As='h3' size={16} color='#666' weight={300} className='modalcontent__title'>Обратно вернуть их уже не удастся!</Text>
          <button className='modalcontent__submit' onClick={handleSubmit}>Удалить</button>
          <button className='modalcontent__cancel' onClick={() => handleCancel(dispatch)}>Отмена</button>
    </div>
    )
}
