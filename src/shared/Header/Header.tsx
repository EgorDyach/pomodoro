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
  const handleChangeTheme = () => {
    const newTheme = appTheme === 'dark' ? 'light' : 'dark';
    dispatch({type: 'CHANGE_THEME', newTheme: newTheme})
  }
  return (
    <header className='header'>
      <Container>
        <Logo />
        <div className="headerControls">
          {pathname === '/'
            ? (
              <Link to={'/statistic'}>
                <span className='header__link'>
                  <Icon typeOfIcon={EIcons.statistic} size={24} />
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
          }
          <button className="toggle" onClick={handleChangeTheme}>
            <span></span>
          </button>
        </div>
      </Container>
    </header>
  );
}
