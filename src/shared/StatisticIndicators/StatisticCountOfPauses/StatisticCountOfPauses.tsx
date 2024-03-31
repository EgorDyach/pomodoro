import './statisticcountofpauses.css';
import { Text } from '../../../components/Text';
import { useEffect, useState } from 'react';
import { StatisticDay } from '../../../store/store';
import { EIcons, Icon } from '../../../components/Icon';

export function StatisticCountOfPauses({ today }: { today: StatisticDay | undefined }) {
  const [sumOfPauses, setSumOfPauses] = useState(0);
  useEffect(() => {
    setSumOfPauses(0);
    let q = 0;
    today?.taskStatistic.forEach(e => {
      q+=e.countOfPauses
    })
    setSumOfPauses(q);
  }, [today])
  return (
    <div className='statistic__count statistic__indicator'>
      <div className='statistic__info'>
        <Text size={24} weight={700}>Остановки</Text>
        <Text size={64} weight={300}>{sumOfPauses}</Text>
      </div>
      <Icon typeOfIcon={EIcons.stop} />
    </div>
  );
}
