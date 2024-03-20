import './maintimerbody.css';
import { RootState, Task } from '../../../store/store';
import { Text } from '../../../components/Text';
import { TimerStartStopBtn } from './TimerStartStopBtn';
import { useEffect, useState } from 'react';
import sound from '../../../assets/soundOfNotification__default.mp3'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { EIcons, Icon } from '../../../components/Icon';

const remakeTime = (time: number): string => {
  const timeArr: number[] = []
  let res = ''
  timeArr.push(Math.floor(time / 60))
  timeArr.push(time - timeArr[0] * 60)
  if (timeArr[0] === 0) {
    res += `00:`
  } else if (timeArr[0] < 10) {
    res += `0${Math.floor(timeArr[0])}:`
  } else {
    res += `${Math.floor(timeArr[0])}:`
  }
  if (timeArr[1] === 0) {
    res += `00`
  } else if (timeArr[1] < 10) {
    res += `0${Math.floor(timeArr[1])}`
  } else {
    res += `${Math.floor(timeArr[1])}`
  }

  return res;
}

export function MainTimerBody({ active }: { active: Task; }) {
  const [timeOfTask, setTimeOfTask] = useState(active.timeOfTask)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isStarted, setIsStarted] = useState(useSelector<RootState, boolean>(state => state.isStartedTimer))
  const isNotificationOn = useSelector<RootState, boolean>(state => state.Local.isNotificationsOn)
  const appTheme = useSelector<RootState, string>(state => state.Local.appTheme)

  const dispatch = useDispatch();

  const handleAddMinute = () => {
    setTimeOfTask(timeOfTask + 60)
  }

  const handleClick = () => {
    setIsStarted(true)
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      dispatch({type: "SAVE_TIME_OF_TASK", active, timeOfTask,})
    }
  }

  useEffect(() => {
    setTimeOfTask(active.timeOfTask)
  }, [active.id, active.timeOfTask, active.activeTomato])

  useEffect(() => {
    dispatch({type: "SET_IS_PLAYING_TIMER", isPlaying, isStarted})
  }, [dispatch, isPlaying, isStarted])

  useEffect(() => {
    const interval = setTimeout(() => {
      if (timeOfTask === 0) {
        setIsPlaying(false);
        setIsStarted(false);
        if (isNotificationOn) {
          const audio = new Audio(sound);
          audio.play();
        }
        dispatch({type: "END_OF_TASK_TOMATO", active: active})
      } else if (isPlaying) {
        setTimeOfTask(timeOfTask - 1)
      }
    }, 10)

    return () => clearInterval(interval);
  }, [active, dispatch, isNotificationOn, isPlaying, timeOfTask]);
  return (
    <div className='mainTimer__body'>
      <Text As='h3' weight={200} size={150} color={isPlaying ? '#DC3E22' : (appTheme === 'dark' ? '#E7E7E7' : "#333")} className='mainTimer__title'>{remakeTime(timeOfTask)}</Text>
      <button onClick={handleAddMinute}><Icon size={50} typeOfIcon={EIcons.plus} /></button>
      <TimerStartStopBtn handleClick={(handleClick)} isPlaying={isPlaying} isStarted={isStarted} />
      {/* <TimerStopReadyBtn /> */}
    </div>
  );
}
