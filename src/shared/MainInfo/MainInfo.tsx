import { useSelector } from 'react-redux';
import { Text } from '../../components/Text';
import { MainInfoForm } from './MainInfoForm';
import { MainList } from './MainList';
import './maininfo.css';
import { RootState, Task } from '../../store/store';
import { formatTime } from '../../utils/formatTime';



export function MainInfo() {
  const TIME_OF_TASK = useSelector<RootState, number>(state => state.Local.timeOfTomato)
  let sumOfSeconds = 0
  const appTheme = useSelector<RootState, string>(state => state.Local.appTheme)
  const tasks = useSelector<RootState, Task[]>(state => state.Local.arrayOfTasks);
  tasks.forEach((e) => {
    sumOfSeconds += (e.count * TIME_OF_TASK * 60)
  })


  
  return (
    <div className='mainInfo'>
      <Text weight={700} color={appTheme === 'dark' ? "#E7E7E7" : '#333333'} size={24} className='mainInfo__title'>Ура! Теперь можно начать работать:</Text>
      <ul className='mainInfo__list'>
        <li className='mainInfo__item'>
          <Text weight={300} color={appTheme === 'dark' ? "#E7E7E7" : '#333333'} size={16} className='mainInfo__item-text'>Выберите категорию и напишите название текущей задачи</Text>
        </li>
        <li className='mainInfo__item'>
          <Text weight={300} color={appTheme === 'dark' ? "#E7E7E7" : '#333333'} size={16} className='mainInfo__item-text'>Запустите таймер («помидор»)</Text>
        </li>
        <li className='mainInfo__item'>
          <Text weight={300} color={appTheme === 'dark' ? "#E7E7E7" : '#333333'} size={16} className='mainInfo__item-text'>Работайте пока «помидор» не прозвонит</Text>
        </li>
        <li className='mainInfo__item'>
          <Text weight={300} color={appTheme === 'dark' ? "#E7E7E7" : '#333333'} size={16} className='mainInfo__item-text'>Сделайте короткий перерыв (3-5 минут)</Text>
        </li>
        <li className='mainInfo__item'>
          <Text weight={300} color={appTheme === 'dark' ? "#E7E7E7" : '#333333'} size={16} className='mainInfo__item-text'>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).</Text>
        </li>
      </ul>
      <div className='mainInfo__tasks'>
        <MainInfoForm />
        <MainList />
        <p className='mainInfo__totalTime'>
          {sumOfSeconds > 356400 ? '99 часов и более...' : formatTime(sumOfSeconds, 'long')}
        </p>
      </div>
    </div>
  );
}
