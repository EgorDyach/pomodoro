import './maintimerbody.css';
import { RootState, Task } from '../../../store/store';
import { Text } from '../../../components/Text';
import { TimerStartStopBtn } from './TimerStartStopBtn';
import { useEffect, useState } from 'react';
import sound from '../../../assets/soundOfNotification__default.mp3'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { EIcons, Icon } from '../../../components/Icon';
import { TimerStopReadyBtn } from './TimerStopReadyBtn';

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
  const isNotificationOn = useSelector<RootState, boolean>(state => state.Local.isNotificationsOn)
  const appTheme = useSelector<RootState, string>(state => state.Local.appTheme)
  const timeOfTaskFromSettings = useSelector<RootState, number>(state => state.Local.timeOfTomato)
  const timeOfLongBreak = useSelector<RootState, number>(state => state.Local.timeOfLongBreak)
  const timeOfLittleBreak = useSelector<RootState, number>(state => state.Local.timeOfLittleBreak)
  const isAutoPlay = useSelector<RootState, boolean>(state => state.Local.isAutoPlay)
  const countOfBreaks = useSelector<RootState, number>(state => state.Local.countOfBreaks)
  const [timeOfTask, setTimeOfTask] = useState(active.timeOfTask)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBreakTimer, setIsBreakTimer] = useState(false)
  const [isStarted, setIsStarted] = useState(useSelector<RootState, boolean>(state => state.isStartedTimer))
  const [timeOfBreak, setTimeOfBreak] = useState(countOfBreaks === 0 ? timeOfLongBreak*60 : timeOfLittleBreak*60)
  const dispatch = useDispatch();

  const handleAddMinute = () => {
    setTimeOfTask(timeOfTask + 60)
  }

  const handleClick = () => {
    setIsStarted(true)
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      dispatch({ type: "SAVE_TIME_OF_TASK", active, timeOfTask, })
    }
  }

  const handleClickStop = () => {
    if (isBreakTimer) {
      setIsBreakTimer(false)
      setTimeOfBreak(countOfBreaks === 0 ? timeOfLongBreak*60 : timeOfLittleBreak*60)
      setIsPlaying(false)
      setIsStarted(false)
      if (isAutoPlay) {
        setIsPlaying(true)
        setIsStarted(true)
      }
    } else {
      setTimeOfTask(timeOfTaskFromSettings * 60)
      setIsPlaying(false)
      setIsStarted(false)
      if (isPlaying) {
        dispatch({ type: "SAVE_TIME_OF_TASK", isPlaying, active, timeOfTask: (timeOfTaskFromSettings * 60) })
      } else {
        dispatch({ type: "END_OF_TASK_TOMATO", active: active })
        setIsBreakTimer(true)
        if (isAutoPlay) {
          setIsPlaying(true)
          setIsStarted(true)
        }
      }
    }

  }

  useEffect(() => {
    setTimeOfTask(active.timeOfTask)
  }, [active.id, active.timeOfTask, active.activeTomato])

  useEffect(() => {
    setTimeOfBreak(timeOfBreak)
  }, [timeOfBreak])

  useEffect(() => {
    dispatch({ type: "SET_IS_PLAYING_TIMER", isPlaying, isStarted, isBreakTimer })
  }, [dispatch, isBreakTimer, isPlaying, isStarted])

  useEffect(() => {
    const interval = setTimeout(() => {
      if (!isBreakTimer) {
        if (timeOfTask === 0) {
          setIsPlaying(false);
          if (isNotificationOn) {
            const audio = new Audio(sound);
            audio.play();
          }
          dispatch({ type: "END_OF_TASK_TOMATO", active: active })
          setIsBreakTimer(true)
          if (isAutoPlay) {
            setIsPlaying(true)
          }
        } else if (isPlaying) {
          setTimeOfTask(timeOfTask - 1)
        }
      }
    }, 1000)

    return () => clearInterval(interval);
  }, [active, dispatch, isAutoPlay, isBreakTimer, isNotificationOn, isPlaying, timeOfTask]);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (isBreakTimer) {
        if (timeOfBreak === 0) {
          setIsPlaying(false);
          if (isNotificationOn) {
            const audio = new Audio(sound);
            audio.play();
          }
          setIsBreakTimer(false)
          if (isAutoPlay) {
            setIsPlaying(true)
          }
          setTimeOfBreak(countOfBreaks === 0 ? timeOfLongBreak*60 : timeOfLittleBreak*60)
        } else if (isPlaying) {
          setTimeOfBreak(timeOfBreak - 1)
        }
      }
    }, 1000)

    return () => clearInterval(interval);
  }, [active, countOfBreaks, dispatch, isAutoPlay, isBreakTimer, isNotificationOn, isPlaying, timeOfBreak, timeOfLittleBreak, timeOfLongBreak]);
  return (
    <div className='mainTimer__body'>
      <Text As='h3' weight={200} size={150} color={isPlaying ? (isBreakTimer ? '#A8B64F' : '#DC3E22') : (appTheme === 'dark' ? '#E7E7E7' : "#333")} className='mainTimer__title'>{remakeTime(isBreakTimer ? timeOfBreak :timeOfTask)}</Text>
      <button onClick={handleAddMinute} className='mainTimer__body-addMinute'><Icon size={50} typeOfIcon={EIcons.plus} /></button>
      <div className="mainTimer__controls">
        <TimerStartStopBtn handleClick={(handleClick)} isPlaying={isPlaying} isStarted={isStarted} />
        <TimerStopReadyBtn handleClick={(handleClickStop)} isBreakTimer={isBreakTimer} isPlaying={isPlaying} isStarted={isStarted} />
      </div>
    </div>
  );
}
