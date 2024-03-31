import  './statistictimeonpause.css';
import { Text } from '../../../components/Text';
import { EIcons, Icon } from '../../../components/Icon';
import { StatisticDay } from '../../../store/store';
import { formatTime } from '../../../utils/formatTime';

export function StatisticTimeOnPause({today}: {today: StatisticDay | undefined}) {
  return (
    <div className='statistic__time statistic__indicator'>
      <div className='statistic__info'>
        <Text size={24} weight={700}>Время на паузе</Text>
        <Text size={64} weight={300}>{typeof today !== 'undefined' && today.timeOfPause !== 0 ? formatTime( (today.timeOfPause),'short'): '0c'}</Text>
      </div>
      <Icon typeOfIcon={EIcons.time} size={129} />
    </div>
  );
}
