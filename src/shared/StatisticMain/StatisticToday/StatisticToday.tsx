import { useSelector } from 'react-redux';
import  './statistictoday.css';
import { RootState, StatisticType } from '../../../store/store';
import { Text } from '../../../components/Text';
import { formatTime } from '../../../utils/formatTime';

const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

export function StatisticToday() {
  const statistis = useSelector<RootState, StatisticType>(state => state.Local.statistic);
  const day = useSelector<RootState, string>(state => state.dayInStatistic);
  const appTheme = useSelector<RootState, string>(state => state.Local.appTheme)
  const isInStatistic = statistis.days.find(e => e.day === day);
  if (typeof isInStatistic === 'undefined' || isInStatistic.timeOfWork === 0) {
    return (
      <div className='statistic__today'>
        <Text weight={700} color={appTheme === 'dark' ? '#f4f4f4' : "#333"} size={24}>{days[new Date().getDay()]}</Text>
        <Text weight={300} className='statistic__today-text' color={appTheme === 'dark' ? '#f4f4f4' : "#333"} size={16}>Нет данных</Text>
      </div>
    )
  }
  return (
    <div className='statistic__today'>
        <Text weight={700} color={appTheme === 'dark' ? '#f4f4f4' : "#333"} size={24}>{days[new Date().getDay()]}</Text>
        <Text weight={300} className='statistic__today-text' color={appTheme === 'dark' ? '#f4f4f4' : "#333"} size={16}>Вы работали над задачами<br /> в течение <Text size={16} color='#DC3E22'>{formatTime(isInStatistic.timeOfWork, 'longStatistic')}</Text></Text>
    </div> 
  );
}
