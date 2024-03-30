import { useSelector } from 'react-redux';
import { Text } from '../../components/Text';
import './statisticheader.css';
import { RootState } from '../../store/store';
import { StatisticSelect } from './StatisticSelect';

export function StatisticHeader() {
  const appTheme = useSelector<RootState, string>(state => state.Local.appTheme)
  return (
    <div className='statistic__header'>
      <Text size={24} color={appTheme === 'dark' ? '#f4f4f4' : '#333'} weight={700}>Ваша активность</Text>
      <StatisticSelect />
    </div>
  );
}
