import './header.css';
import { Logo } from '../../assets/Logo';
import { Container } from '../../components/Container';
import { Link, useLocation } from 'react-router-dom';
import { EIcons, Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';

export function Header() {
  const { pathname } = useLocation()
  const appTheme = useSelector<RootState, string>(state => state.Local.appTheme)
  const dispatch = useDispatch();
  const isPlaying = useSelector<RootState, boolean>(state => state.isPlayingTimer);
  const handleChangeTheme = () => {
    const newTheme = appTheme === 'dark' ? 'light' : 'dark';
    dispatch({ type: 'CHANGE_THEME', newTheme: newTheme })
  }
  return (
    <header className='header'>
      <Container>
        <Logo />
        <div className="headerControls">
          {isPlaying &&
            <span className='header__link header__link-disabled'>
              <Icon typeOfIcon={EIcons.statistic} fill='#999' size={24} />
              <Text As={'span'} size={16} color={isPlaying ? '#999' : (appTheme === 'dark' ? '#EE5237' : '#DC3E22')} weight={400} className='header__link-text'>Статистика</Text>
            </span>
          }
          {!isPlaying && (pathname === '/'
            ? (
              <Link to={'/statistic'}>
                <span className='header__link'>
                  <Icon typeOfIcon={EIcons.statistic} fill='#DC3E22' size={24} />
                  <Text As={'span'} size={16} color={appTheme === 'dark' ? '#EE5237' : '#DC3E22'} weight={400}>Статистика</Text>
                </span>
              </Link>
            )
            : (
              <Link to={'/'}>
                <span className='header__link'>
                  <Icon typeOfIcon={EIcons.home} size={24} />
                  <Text As={'span'} size={16} color='#DC3E22' weight={400}>Главная</Text>
                </span>
              </Link>
            )
          )}
          <button className="toggle" disabled={isPlaying} onClick={handleChangeTheme}>
            <span></span>
          </button>
          {
            isPlaying ?
              <span className='header__link header__link-settings-disabled header__link-settings'>
                <Icon typeOfIcon={EIcons.settings} fill={isPlaying ? '#999' : (appTheme === 'dark' ? '#f4f4f4' : '#292D32')} size={24} />
              </span> :
              <Link to={'/settings'}>
                <span className='header__link header__link-settings'>
                  <Icon typeOfIcon={EIcons.settings} fill={appTheme === 'dark' ? '#f4f4f4' : '#292D32'} size={24} />
                </span>
              </Link>
          }
        </div>
      </Container>
    </header>
  );
}
