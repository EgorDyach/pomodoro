import './settingspage.css';
import { Text } from '../../components/Text';
import { Container } from '../../components/Container';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, ToLocalType } from '../../store/store';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

export function SettingsPage() {
  const state = useSelector<RootState, ToLocalType>(state => state.Local)
  const [timeOfTomato, setTimeOfTomato] = useState(state.timeOfTomato)
  const [timeOfLittleBreak, setTimeOfLittleBreak] = useState(state.timeOfLittleBreak)
  const [timeOfLongBreak, setTimeOfLongBreak] = useState(state.timeOfLongBreak)
  const [isNotificationsOn, setIsNotificationsOn] = useState(state.isNotificationsOn)
  const [frequencyLongBreak, setFrequencyLongBreak] = useState(state.frequencyLongBreak)
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appTheme = state.appTheme
  const handleClick = () => {
    dispatch({ type: "CHANGE_SETTINGS", timeOfTomato, timeOfLittleBreak, timeOfLongBreak, isNotificationsOn, frequencyLongBreak });
    setIsDisabled(true);
    alert('Успешно!');
    navigate('/')
  }

  const handleReloadWeb = () => {
    dispatch({ type: "MODAL_OPEN_DELETE_DATA" })
  }

  useEffect(() => {

    if (timeOfTomato === 0 || timeOfLongBreak === 0 || timeOfLittleBreak === 0 || frequencyLongBreak === 0) {
      setIsDisabled(true)
    } else if ((timeOfLongBreak !== state.timeOfLongBreak) || (timeOfTomato !== state.timeOfTomato) || (timeOfLittleBreak !== state.timeOfLittleBreak) || (frequencyLongBreak !== state.frequencyLongBreak) || (state.isNotificationsOn !== isNotificationsOn)) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [timeOfTomato, timeOfLongBreak, timeOfLittleBreak, isNotificationsOn, frequencyLongBreak])
  useEffect(() => {
    setIsDisabled(true)
    setIsNotificationsOn(state.isNotificationsOn)
    setTimeOfLittleBreak(state.timeOfLittleBreak)
    setTimeOfLongBreak(state.timeOfLongBreak)
    setTimeOfTomato(state.timeOfTomato)
    setFrequencyLongBreak(state.frequencyLongBreak)
  }, [state.timeOfLongBreak, state.timeOfTomato, state.timeOfLittleBreak, state.isNotificationsOn, state.frequencyLongBreak])
  const handleChange = (event: (React.ChangeEvent<HTMLInputElement>)) => {
    const value = Number(event.target.value);
    const typeOfInput = event.target.getAttribute('data-settingsItem')
    switch (typeOfInput) {
      case 'timeOfTomato':
        if (Number.isInteger(value)) {
          if (value < 0 || value > 300) {
            setTimeOfTomato(timeOfTomato);
          } else {
            setTimeOfTomato(value);
          }
        }
        break;
      case 'timeOfLittleBreak':
        if (Number.isInteger(value)) {
          if (value < 0 || value > 60) {
            setTimeOfLittleBreak(timeOfLittleBreak);
          } else {
            setTimeOfLittleBreak(value);
          }
        }
        break;
      case 'timeOfLongBreak':
        if (Number.isInteger(value)) {
          if (value < 0 || value > 240) {
            setTimeOfLongBreak(timeOfLongBreak);
          } else {
            setTimeOfLongBreak(value);
          }
        }
        break;
      case "frequencyLongBreak":
        if (Number.isInteger(value)) {
          if (value < 0 || value > 20) {
            setFrequencyLongBreak(frequencyLongBreak);
          } else {
            setFrequencyLongBreak(value)
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className='settingsPage'>
      <Container>
        <Text As='h2' weight={700} size={30} color={appTheme === 'dark' ? '#f4f4f4' : '#333'}>Настройки</Text>
        <ul className="settings__list">
          <li className="settings__item">
            <label className='settings__item'>
              <Text As='p' size={16} weight={300} color={appTheme === 'dark' ? '#ffffff' : '#333'} className='settings__item-label'>
                Минут в одном помидоре
              </Text>
              <div className="settings__inputs">
                <input type='number' className='settings__item-input' data-settingsItem='timeOfTomato' value={timeOfTomato} onChange={handleChange} />
                <input type='range' data-settingsItem='timeOfTomato' value={timeOfTomato} onChange={handleChange} max={300} min={1} />
              </div>
            </label>
          </li>
          <li className="settings__item">
            <label className='settings__item'>
              <Text As='p' size={16} weight={300} color={appTheme === 'dark' ? '#ffffff' : '#333'} className='settings__item-label'>
                Минут в коротком перерыве
              </Text>
              <div className="settings__inputs">
                <input type='number' className='settings__item-input' data-settingsItem='timeOfLittleBreak' value={timeOfLittleBreak} onChange={handleChange} />
                <input type='range' data-settingsItem='timeOfLittleBreak' value={timeOfLittleBreak} onChange={handleChange} max={60} min={1} />
              </div>
            </label>
          </li>
          <li className="settings__item">
            <label className='settings__item'>
              <Text As='p' size={16} weight={300} color={appTheme === 'dark' ? '#ffffff' : '#333'} className='settings__item-label'>
                Минут в длинном перерыве
              </Text>
              <div className="settings__inputs">
                <input type='number' className='settings__item-input' data-settingsItem="timeOfLongBreak" value={timeOfLongBreak} onChange={handleChange} />
                <input type='range' data-settingsItem="timeOfLongBreak" value={timeOfLongBreak} onChange={handleChange} max={240} min={1} />
              </div>
            </label>
          </li>
          <li className="settings__item">
            <label className='settings__item'>
              <Text As='p' size={16} weight={300} color={appTheme === 'dark' ? '#ffffff' : '#333'} className='settings__item-label'>
                Частота длинных перерывов
              </Text>
              <div className="settings__inputs">
                <input type='number' className='settings__item-input' data-settingsItem="frequencyLongBreak" value={frequencyLongBreak} onChange={handleChange} />
                <input type='range' data-settingsItem="frequencyLongBreak" value={frequencyLongBreak} onChange={handleChange} max={20} min={1} />
              </div>
            </label>
          </li>
          <li className="settings__item">
            <label className='settings__item'>
              <Text As='p' size={16} weight={300} color={appTheme === 'dark' ? '#ffffff' : '#333'} className='settings__item-label'>
                Уведомления об окончание помидора
              </Text>
              <button onClick={() => setIsNotificationsOn(!isNotificationsOn)} className={isNotificationsOn ? 'settings__toggle settings__toggle-active' : 'settings__toggle'} ><span></span></button>
            </label>
          </li>
        </ul>
        <button onClick={handleClick} disabled={isDisabled} className={isDisabled ? 'settings__submit settings__submit-disabled' : 'settings__submit'} ><Text As='span' size={20} weight={500} color={isDisabled ? (appTheme === 'dark' ? '#555' : '#bbb') : '#fff'}>Сохранить</Text></button>
        <button onClick={handleReloadWeb} className='settings__reload'>Удалить все данные</button>
      </Container>
    </div>
  );
}