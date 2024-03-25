import './changenotification.css';
import { Text } from '../../../components/Text';
import { useSelector } from 'react-redux';
import { RootState, ToLocalType } from '../../../store/store';

import Sound1 from '../../../assets/sounds/soundOfNotification__1.mp3'
import Sound2 from '../../../assets/sounds/soundOfNotification__2.mp3'
import Sound3 from '../../../assets/sounds/soundOfNotification__3.mp3'
import Sound4 from '../../../assets/sounds/soundOfNotification__4.mp3'
import Sound5 from '../../../assets/sounds/soundOfNotification__5.mp3'
import Sound6 from '../../../assets/sounds/soundOfNotification__6.mp3'
import Sound7 from '../../../assets/sounds/soundOfNotification__7.mp3'
import SoundDefault from '../../../assets/sounds/soundOfNotification__default.mp3'
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const content: string[] = [
  SoundDefault, Sound1, Sound2, Sound3, Sound4, Sound5, Sound6, Sound7
]

export function ChangeNotification() {
  const [isNotificationTaskOpen, setIsNotificationTaskOpen] = useState(false)
  const [isPlayingSound, setIsPlayingSound] = useState(false)
  const [indexOfPlaying, setIndexOfPlaying] = useState(-1)
  const state = useSelector<RootState, ToLocalType>(state => state.Local)
  const appTheme = state.appTheme
  const dispatch = useDispatch();
  const handlePlaySound = (link: string) => {
    setIsPlayingSound(true);
    setIndexOfPlaying(content.indexOf(link))
    const a = new Audio(link);
    a.play()
    setTimeout(() => {
      setIndexOfPlaying(-1);
      setIsPlayingSound(false);
    }, 1000)
  }
  const handleSetSound = (link: string) => {
    dispatch({type: "CHANGE_NOTIFICATION_SOUND", soundOfNotification: link})
  }
  return (
    <div style={{position: "relative"}}>
      <button className={isNotificationTaskOpen ? 'changeSoundOpen changeSoundOpen-open' : 'changeSoundOpen'} onClick={() => setIsNotificationTaskOpen(!isNotificationTaskOpen)}><Text As='span' weight={300} color={appTheme === 'dark' ? '#f4f4f4' : '#333'} size={20}>Звук окончания задания</Text></button>
      <ul className={isNotificationTaskOpen ? "listOfSounds listOfSounds-open" : "listOfSounds"}>
        {
          content.map((e) => {
            return <li className='itemOfSounds' onClick={() => (!isPlayingSound && handlePlaySound(e))}>
              <button disabled={isPlayingSound} onClick={() => handlePlaySound(e)}>{indexOfPlaying === content.indexOf(e) ? (<svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM18 28H14V12H18V28ZM26 28H22V12H26V28Z" fill={appTheme === 'dark' ? "white" : "black"} />
              </svg>
              ) : (<svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM16 29V11L28 20L16 29Z" fill={appTheme === 'dark' ? "white" : "black"} />
              </svg>
              )}</button>
              <Text size={16} className={indexOfPlaying === content.indexOf(e) ? "" : ""} color={appTheme === 'dark' ? '#f4f4f4' : '#333'}>Уведомление #{content.indexOf(e) + 1}</Text>
              <button onClick={() => handleSetSound(e)}>{state.soundOfNotification === e ? (<svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0H4C1.79 0 0 1.79 0 4V32C0 34.21 1.79 36 4 36H32C34.21 36 36 34.21 36 32V4C36 1.79 34.21 0 32 0ZM14 28L4 18L6.83 15.17L14 22.34L29.17 7.17L32 10L14 28Z" fill={appTheme === 'dark' ? "white" : "black"} />
              </svg>
              ): <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 4V32H4V4H32ZM32 0H4C1.79 0 0 1.79 0 4V32C0 34.21 1.79 36 4 36H32C34.21 36 36 34.21 36 32V4C36 1.79 34.21 0 32 0Z" fill={appTheme === 'dark' ? "white" : "black"}/>
              </svg>
              }</button>
            </li>
          })
        }
      </ul>
    </div>
  );
}
