import { StatisticCountTomatos } from './StatisticCountTomatos';
import { StatisticSchedule } from './StatisticSchedule';
import { StatisticToday } from './StatisticToday';
import './statisticmain.css';

export function StatisticMain() {
  return (
    <div className='statisticMain'>
      <div className='statisticMain__left'>
        <StatisticToday />
        <StatisticCountTomatos />
      </div>
      <StatisticSchedule />      
    </div>   
  );
}
