import { useSelector } from 'react-redux';
import './statisticselect.css';
import { RootState, typeStatisticOption } from '../../../store/store';
import { Text } from '../../../components/Text';
import { useDispatch } from 'react-redux';
import { useState } from 'react';



export function StatisticSelect() {
  const options = useSelector<RootState, typeStatisticOption[]>(state => state.contentForApp.optionsForStatistic);
  const statisticOptionActiveIndex = useSelector<RootState, number>(state => state.Local.statisticOptionActiveIndex)
  const dispatch = useDispatch();
  const [isSelectActive, setIsSelectActive] = useState(false)
  const handleClickActive = () => {
    setIsSelectActive(!isSelectActive)
  }

  const handleClickOption = (newActiveIndex: number) => {
    dispatch({ type: "CHANGE_SELECT_ACTIVE", newActiveIndex })
    setIsSelectActive(false)
  }

  return (
    <div className='statistic__select'>
      <div className={`statistic__select-item ${isSelectActive ? 'statistic__select-item-opened' : ''} statistic__select-item-active`}>
        <button className='statistic__option' onClick={handleClickActive}>
          <Text size={16}>
            {options[statisticOptionActiveIndex].label}
          </Text>
        </button>
      </div>
      <ul className='statistic__select-list'>
        {isSelectActive && options.map(e => {
          return options.indexOf(e) !== statisticOptionActiveIndex ? (<li className='statistic__select-item'>
            <button className='statistic__option' onClick={() => handleClickOption(options.indexOf(e))}>
              <Text size={16}>
                {e.label}
              </Text>
            </button>
          </li>) : ''
        })}
      </ul>
    </div>
  )
}