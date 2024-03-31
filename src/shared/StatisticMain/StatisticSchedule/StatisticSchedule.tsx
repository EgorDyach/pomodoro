import { useSelector } from 'react-redux';
import './statisticschedule.css';
import { RootState, StatisticType } from '../../../store/store';
import { Text } from '../../../components/Text';
import { getWeeksDates } from '../../../utils/getWeek';
import { useDispatch } from 'react-redux';
import { formatTime } from '../../../utils/formatTime';
const shortDays = [
  'Пн', "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"
]


export function StatisticSchedule() {
  const statisticOptionActiveIndex = useSelector<RootState, number>(state => state.Local.statisticOptionActiveIndex);
  const today = useSelector<RootState, string>(state => state.dayInStatistic);
  const { days } = useSelector<RootState, StatisticType>(state => state.Local.statistic)
  const appTheme = useSelector<RootState, string>(state => state.Local.appTheme)
  const week = getWeeksDates(new Date(), statisticOptionActiveIndex)
  const dispatch = useDispatch();
  const maxTimeOfWork = days.reduce((acc, curr) => {
    console.log(week.includes(curr.day));
    return !(week.includes(curr.day)) || acc.timeOfWork > curr.timeOfWork  ? acc : curr}, { timeOfWork: 0 })
  console.log(week, maxTimeOfWork)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    dispatch({ type: "CHANGE_DAY_IN_STATISTIC", dayInStatistic: event.currentTarget.getAttribute('data-day') })
  }
  return (
    <div className='statistic__schedule'>
      <ul className='statistic__list'>
        {week.map(e => {
          const numOfE = week.indexOf(e)
          const isElemInStat = days.find(q => q.day === e)
          return <li className='statistic__item' key={week.indexOf(e)}>
            <button onClick={handleClick} style={{ height: `calc(${typeof isElemInStat !== 'undefined' ? (isElemInStat === maxTimeOfWork ? '100' : (isElemInStat?.timeOfWork / maxTimeOfWork.timeOfWork * 100)) : '1.5'}%)` }} data-day={e} className={typeof isElemInStat === 'undefined' ? 'statistic__item-column statistic__item-column-disabled' : (e === today ? 'statistic__item-column statistic__item-column-active' : 'statistic__item-column')}>
            </button>

            <span onClick={handleClick} data-day={e} className='statistic__item-text' >
              <Text size={24} weight={300} color={(e === today) ? "#DC3E22" : "#999999"}>
                {shortDays[numOfE]}
              </Text>
            </span>
          </li>
        })}
      </ul>
      <ul className='statistic__time-list'>
        <li className='statistic__time-item'>
          <span className='statistic__time-line'></span>
          <Text size={12} weight={300} className='statistic__time-text' color={appTheme === 'dark' ? '#f4f4f4' : "#333"}>
            {maxTimeOfWork.timeOfWork !== 0 ? formatTime(Math.floor(maxTimeOfWork.timeOfWork), 'middle') : '40 мин'}
          </Text>
        </li>
        <li className='statistic__time-item'>
          <span className='statistic__time-line'></span>
          <Text size={12} weight={300} className='statistic__time-text' color={appTheme === 'dark' ? '#f4f4f4' : "#333"}>
            {maxTimeOfWork.timeOfWork !== 0 ? formatTime(Math.floor(maxTimeOfWork.timeOfWork*0.75), 'middle') : '30 мин'}
          </Text>
        </li>
        <li className='statistic__time-item'>
          <span className='statistic__time-line'></span>
          <Text size={12} weight={300} className='statistic__time-text' color={appTheme === 'dark' ? '#f4f4f4' : "#333"}>
            {maxTimeOfWork.timeOfWork !== 0 ? formatTime(Math.floor(maxTimeOfWork.timeOfWork*0.5), 'middle') : '20 мин'}
          </Text>
        </li>
        <li className='statistic__time-item'>
          <span className='statistic__time-line'></span>
          <Text size={12} weight={300} className='statistic__time-text' color={appTheme === 'dark' ? '#f4f4f4' : "#333"}>

            {maxTimeOfWork.timeOfWork !== 0 ? formatTime(Math.floor(maxTimeOfWork.timeOfWork*0.25), 'middle') : '10 мин'}
          </Text>
        </li>
      </ul>
      <span className="statistic__bg-text"></span>
    </div>
  )
}

