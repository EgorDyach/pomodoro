import './maintimerbody.css';
import { RootState, Task } from '../../../store/store';
import { Text } from '../../../components/Text';
import { TimerStartStopBtn } from './TimerStartStopBtn';
import { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { EIcons, Icon } from '../../../components/Icon';
import { TimerStopReadyBtn } from './TimerStopReadyBtn';
import { formatTime } from '../../../utils/formatTime';

export function MainTimerBody({ active }: { active: Task; }) {
  const isNotificationOn = useSelector<RootState, boolean>(state => state.Local.isNotificationsOn)
  const appTheme = useSelector<RootState, string>(state => state.Local.appTheme)
  const timeOfTaskFromSettings = useSelector<RootState, number>(state => state.Local.timeOfTomato)
  const timeOfLongBreak = useSelector<RootState, number>(state => state.Local.timeOfLongBreak)
  const timeOfLittleBreak = useSelector<RootState, number>(state => state.Local.timeOfLittleBreak)
  const isAutoPlay = useSelector<RootState, boolean>(state => state.Local.isAutoPlay)
  const countOfBreaks = useSelector<RootState, number>(state => state.Local.countOfBreaks)
  const soundOfNotification = useSelector<RootState, string>(state => state.Local.soundOfNotification)
  const [timeOfTask, setTimeOfTask] = useState(active.timeOfTask)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBreakTimer, setIsBreakTimer] = useState(false)
  const [isStarted, setIsStarted] = useState(useSelector<RootState, boolean>(state => state.isStartedTimer))
  const [timeOfBreak, setTimeOfBreak] = useState(countOfBreaks === 0 ? timeOfLongBreak * 60 : timeOfLittleBreak * 60)
  const [timeOfWork, setTimeOfWork] = useState(0)
  const [timeOfPause, setTimeOnPause] = useState(0)
  const [countOfPauses, setCountOfPauses] = useState(0)

  const dispatch = useDispatch();

  const handleAddMinute = () => {
    setTimeOfTask(timeOfTask + 60)
  }

  const handleClick = () => {
    if (isPlaying) {
      setCountOfPauses(countOfPauses + 1)
    }
    setIsStarted(true)
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      dispatch({ type: "SAVE_TIME_OF_TASK", active, timeOfTask })
    }
  }

  const handleClickStop = () => {
    if (isBreakTimer) {
      setIsBreakTimer(false)
      setTimeOfBreak(countOfBreaks === 0 ? timeOfLongBreak * 60 : timeOfLittleBreak * 60)
      setIsPlaying(false)
      setIsStarted(false)
      if (isAutoPlay) {
        setIsPlaying(true)
        setIsStarted(true)
      }
    } else {
      setTimeOfTask(timeOfTaskFromSettings * 60)
      if (isPlaying) {
        setTimeOfWork(0)
        setTimeOnPause(0)
        setCountOfPauses(0)
        setIsPlaying(false)
        setIsStarted(false)
        dispatch({ type: "SAVE_TIME_OF_TASK", isPlaying, active, timeOfTask: (timeOfTaskFromSettings * 60) })
      } else {
        dispatch({ type: "SAVE_STATISTIC", isDone: true, timeOfWork, timeOfPause, countOfPauses, active, timeOnDone: timeOfTask })
        setTimeOfWork(0)
        setTimeOnPause(0)
        setCountOfPauses(0)
        dispatch({ type: "END_OF_TASK_TOMATO", active: active })
        setIsBreakTimer(true)
        if (isAutoPlay) {
          setIsPlaying(true)
          setIsStarted(true)
        }
      }
    }

  }

  useLayoutEffect(() => {
    setTimeOfTask(active.timeOfTask)
  }, [active.id, active.timeOfTask, active.activeTomato])

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (isStarted && !isBreakTimer) {
        setTimeOfWork(timeOfWork + 1)
        if (!isPlaying && !isBreakTimer) {
          setTimeOnPause(timeOfPause + 1)
        }
      }
    }, 1000);

    return () => { clearInterval(interval); }
  }, [isBreakTimer, isPlaying, isStarted, timeOfWork, timeOfPause])

  useLayoutEffect(() => {
    setTimeOfBreak(timeOfBreak)
  }, [timeOfBreak])

  useLayoutEffect(() => {
    dispatch({ type: "SAVE_STATISTIC", isDone: false, timeOfWork, timeOfPause, countOfPauses })
    setTimeOfWork(0)
    setTimeOnPause(0)
    dispatch({ type: "SET_IS_PLAYING_TIMER", isPlaying, isStarted, isBreakTimer })

  }, [dispatch, isBreakTimer, isPlaying, isStarted, timeOfPause])

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (!isBreakTimer) {
        if (timeOfTask === 0) {
          setIsPlaying(false);
          if (isNotificationOn) {
            const audio = new Audio(soundOfNotification);
            audio.play();
          }
          dispatch({ type: "SAVE_STATISTIC", isDone: true, timeOfWork, timeOfPause, countOfPauses, active, timeOnDone: timeOfTask })
          setTimeOfWork(0)
          setTimeOnPause(0)
          setCountOfPauses(0)
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
  }, [active, countOfPauses, dispatch, isAutoPlay, isBreakTimer, isNotificationOn, isPlaying, soundOfNotification, timeOfTask, timeOfWork, timeOfPause]);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (isBreakTimer) {
        if (timeOfBreak === 0) {
          setIsPlaying(false);
          if (isNotificationOn) {
            const audio = new Audio(soundOfNotification);
            audio.play();
          }
          setIsBreakTimer(false)
          if (isAutoPlay) {
            setIsPlaying(true)
          }
          setTimeOfBreak(countOfBreaks === 0 ? timeOfLongBreak * 60 : timeOfLittleBreak * 60)
        } else if (isPlaying) {
          setTimeOfBreak(timeOfBreak - 1)
        }
      }
    }, 1000)

    return () => clearInterval(interval);
  }, [active, countOfBreaks, dispatch, isAutoPlay, isBreakTimer, isNotificationOn, isPlaying, soundOfNotification, timeOfBreak, timeOfLittleBreak, timeOfLongBreak]);
  return (
    <div className='mainTimer__body'>
      <Text As='h3' weight={200} size={150} color={isPlaying ? (isBreakTimer ? '#A8B64F' : '#DC3E22') : (appTheme === 'dark' ? '#E7E7E7' : "#333")} className='mainTimer__title'>{formatTime((isBreakTimer ? timeOfBreak : timeOfTask), 'without')}</Text>
      <button onClick={handleAddMinute} className='mainTimer__body-addMinute'><Icon size={50} typeOfIcon={EIcons.plus} /></button>
      <div className="mainTimer__controls">
        <TimerStartStopBtn handleClick={(handleClick)} isPlaying={isPlaying} isStarted={isStarted} />
        <TimerStopReadyBtn handleClick={(handleClickStop)} isBreakTimer={isBreakTimer} isPlaying={isPlaying} isStarted={isStarted} />
      </div>
    </div>
  );
}
