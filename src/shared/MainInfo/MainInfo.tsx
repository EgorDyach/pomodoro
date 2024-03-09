import { Text } from '../../components/Text';
import { MainInfoForm } from './MainInfoForm';
import './maininfo.css';

export function MainInfo() {
  return (
    <div className='mainInfo'>
      <Text weight={700} color='#333333' size={24} className='mainInfo__title'>Ура! Теперь можно начать работать:</Text>
      <ul className='mainInfo__list'>
        <li className='mainInfo__item'>
          <Text weight={300} color='#333333' size={16} className='mainInfo__item-text'>Выберите категорию и напишите название текущей задачи</Text>
        </li>
        <li className='mainInfo__item'>
          <Text weight={300} color='#333333' size={16} className='mainInfo__item-text'>Запустите таймер («помидор»)</Text>
        </li>
        <li className='mainInfo__item'>
          <Text weight={300} color='#333333' size={16} className='mainInfo__item-text'>Работайте пока «помидор» не прозвонит</Text>
        </li>
        <li className='mainInfo__item'>
          <Text weight={300} color='#333333' size={16} className='mainInfo__item-text'>Сделайте короткий перерыв (3-5 минут)</Text>
        </li>
        <li className='mainInfo__item'>
          <Text weight={300} color='#333333' size={16} className='mainInfo__item-text'>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).</Text>
        </li>
      </ul>
      <MainInfoForm />
    </div>
  );
}
