import { useSelector } from 'react-redux';
import { Text } from '../../components/Text';
import { MainInfoForm } from './MainInfoForm';
import { MainList } from './MainList';
import './maininfo.css';
import { RootState, Task } from '../../store/store';



export function MainInfo() {
  const TIME_OF_TASK = useSelector<RootState, number>(state => state.Local.timeOfTomato)
  let sumOfMinutes = 0
  const appTheme = useSelector<RootState, string>(state => state.Local.appTheme)
  const tasks = useSelector<RootState, Task[]>(state => state.Local.arrayOfTasks);
  tasks.forEach((e) => {
    sumOfMinutes += (e.count * TIME_OF_TASK)
  })
  let isMore = false;
  let countOfHours = Math.floor(sumOfMinutes / 60);
  let wordOfHours = '';
  let countOfMinutes = sumOfMinutes - Math.floor(sumOfMinutes / 60) * 60;
  if (countOfHours > 99) {
    countOfHours = 99
    countOfMinutes = 0
    isMore = true;
  }
  if (countOfHours) {
    if (countOfHours === 1) {
      wordOfHours = 'час'
    } else if (countOfHours >= 5) {
      wordOfHours = 'часов'
    } else {
      wordOfHours = 'часа'
    }
  }
  let wordOfMinutes = '';
  console.log(countOfMinutes.toString().slice(1))
  if (countOfMinutes) {
    if (countOfMinutes.toString().slice(1)) {
      if (countOfMinutes.toString().slice(1) === '1') {
        wordOfMinutes = 'минута'
      } else if (Number(countOfMinutes.toString().slice(1)) >= 5 || Number(countOfMinutes.toString().slice(1)) === 0) {
        wordOfMinutes = 'минут'
      } else {
        wordOfMinutes = 'минуты'
      }
    } else {
      if (countOfMinutes.toString() === '1') {
        wordOfMinutes = 'минута'
      } else if (Number(countOfMinutes.toString()) >= 5) {
        wordOfMinutes = 'минут'
      } else {
        wordOfMinutes = 'минуты'
      }
    }
  }
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
          {countOfHours !== 0 && countOfHours} {wordOfHours !== '' && wordOfHours + ' '}

          {countOfMinutes !== 0 && countOfMinutes} {wordOfMinutes !== '' && wordOfMinutes}
          {isMore && 'и более...'}
          {/* {sumOfMinutes - Math.floor(sumOfMinutes / 60) * 60} минут */}
        </p>
      </div>
    </div>
  );
}
