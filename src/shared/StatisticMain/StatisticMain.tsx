import { StatisticCountTomatos } from './StatisticCountTomatos';
import { StatisticSchedule } from './StatisticSchedule';
import { StatisticToday } from './StatisticToday';
import './statisticmain.css';

export function StatisticMain() {
  return (
    <div>
      <div>
        <StatisticToday />
        <StatisticCountTomatos />
      </div>
      <StatisticSchedule />      
    </div>   
  );
}
