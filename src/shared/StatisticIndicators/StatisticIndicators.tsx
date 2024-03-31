import { useSelector } from 'react-redux';
import { StatisticCountOfPauses } from './StatisticCountOfPauses';
import { StatisticFocus } from './StatisticFocus';
import { StatisticTimeOnPause } from './StatisticTimeOnPause';
import  './statisticindicators.css';
import { RootState, StatisticType } from '../../store/store';

export function StatisticIndicators() {
  const today = useSelector<RootState, string>(state => state.dayInStatistic);
  const { days } = useSelector<RootState, StatisticType>(state => state.Local.statistic)
  const isToday = days.find(e => e.day === today)

  return (
    <div className='statistic__indicators'>
      <StatisticFocus today={isToday} />
      <StatisticTimeOnPause today={isToday} />
      <StatisticCountOfPauses today={isToday} />
    </div>
  );
}
