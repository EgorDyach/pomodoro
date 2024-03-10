import { Container } from '../../components/Container';
import { MainInfo } from '../../shared/MainInfo';
import { MainTimer } from '../../shared/MainTimer';
import { Modal } from '../../shared/Modal';
import './mainpage.css';

export function MainPage() {
  return (
    <div className="mainPage">
      <Container flex={true} >
        <MainInfo />
        <MainTimer />
      </Container>
      <Modal />
    </div>
  );
}
