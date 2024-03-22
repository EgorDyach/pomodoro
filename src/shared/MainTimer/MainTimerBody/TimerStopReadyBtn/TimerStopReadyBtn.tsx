import './timerstopreadybtn.css';
import { Text } from '../../../../components/Text';

export function TimerStopReadyBtn({handleClick,isStarted,isPlaying}: {handleClick: () => void; isStarted: boolean; isPlaying: boolean;}) {

  return (
      <button disabled={!isStarted} className={`timerStopReady__btn${(isStarted && !isPlaying) ? '-ready timerStopReady__btn': ''}`} onClick={handleClick}>
        <Text weight={400} As='span' size={16} color={isStarted ? (isPlaying ? '#DC3E22' :'#fff') : "#c4c4c4"}>
          {isPlaying ? 'Стоп' : (isStarted ? 'Сделано' : "Стоп")}
        </Text>
    </button>
  );
}