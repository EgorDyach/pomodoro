import  './statisticfocus.css';
import { Text } from '../../../components/Text';
import { Icon, EIcons } from '../../../components/Icon';
import { StatisticDay } from '../../../store/store';

export function StatisticFocus({today}: {today: StatisticDay | undefined}) {
  return (
    <div className='statistic__focus statistic__indicator'>
      <div className="statistic__info">
        <Text size={24} weight={700}>Фокус</Text>
        <Text size={64} weight={300}>{typeof today !== 'undefined' ? (Math.round((today.timeOfWork-today.timeOfPause)/today.timeOfWork*100)) : "0"}%</Text>
      </div>
      <Icon typeOfIcon={EIcons.focus} size={129} />
    </div>
  );
}
