import './header.css';
import { Logo } from '../../assets/Logo';
import { Container } from '../../components/Container';
import { Link, useLocation } from 'react-router-dom';
import { EIcons, Icon } from '../../components/Icon';
import { Text } from '../../components/Text';

export function Header() {
  const { pathname } = useLocation()
  return (
    <header className='header'>
      <Container>
        <Logo />
        {pathname === '/'
          ? (
            <Link to={'/statistic'}>
              <span className='header__link'>
                <Icon typeOfIcon={EIcons.statistic} size={24} />
                <Text As={'span'} size={16} color='#DC3E22' weight={400}>Статистика</Text>
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
      </Container>
    </header>
  );
}
