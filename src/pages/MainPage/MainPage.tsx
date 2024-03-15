import { Container } from '../../components/Container';
import { MainInfo } from '../../shared/MainInfo';
import { MainTimer } from '../../shared/MainTimer';
import './mainpage.css';

export function MainPage() {
  return (
    <div className="mainPage">
      <Container flex={true} >
        <MainInfo />
        <MainTimer />
      </Container>
    </div>
  );
}
