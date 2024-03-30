import { useSelector } from 'react-redux';
import { RootState, StatisticType } from '../../../store/store';
import './statisticcounttomatos.css';
import { Text } from '../../../components/Text';
import { EIcons, Icon } from '../../../components/Icon';
import { useEffect, useState } from 'react';

export function StatisticCountTomatos() {
  const statistis = useSelector<RootState, StatisticType>(state => state.Local.statistic);
  const day = useSelector<RootState, string>(state => state.dayInStatistic);
  const appTheme = useSelector<RootState, string>(state => state.Local.appTheme);
  const [countOfTomatos, setCountOfTomatos] = useState(0);
  const isInStatistic = statistis.days.find(e => e.day === day);
  useEffect(() => {
    if (typeof isInStatistic !== 'undefined') {
      setCountOfTomatos(isInStatistic.taskStatistic.length)
    }
  }, [statistis, isInStatistic])
  if (typeof isInStatistic === 'undefined' || countOfTomatos === 0) {
    return (
      <div className='statistic__tomatos statistic__tomatos-nodata'>
        <Icon typeOfIcon={EIcons.IconFunnyPomidor} size={115} />
      </div>
    )
  }
  return (
    <div className='statistic__tomatos'>
      <div className='statistic__tomatos-count'>
        <Icon typeOfIcon={EIcons.pomidor} fill='#DC3E22' size={81} />
        <Text size={24} color={appTheme === 'dark' ? '#f4f4f4' : "#333"} >x {countOfTomatos}</Text>
      </div>
      <Text className='statistic__tomatos-text' color='#fff' size={24}>{countOfTomatos} {countOfTomatos % 10 ===  1 ? "помидор" : (((countOfTomatos >= 5 && countOfTomatos <= 19) || countOfTomatos % 10 >= 5) ? "помидоров" : "помидора")}</Text>
    </div>
  );
}
