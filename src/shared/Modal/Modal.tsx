import './modal.css';
import { useSelector } from 'react-redux';
import { ModalType, RootState, Task } from '../../store/store';
import { ModalContentPlus } from './ModalContentPlus';
import { ModalContentMinus } from './ModalContentMinus';
import { ModalContentChange } from './ModalContentChange';
import { ModalContentDelete } from './ModalContentDelete';
import { IS_NOT_OPEN, MODAL_OPEN_DELETE_DATA, OPEN_MODAL_CHANGE, OPEN_MODAL_DELETE, OPEN_MODAL_MINUS, OPEN_MODAL_PLUS } from '../../store/dataForStore';
import { ModalContentDeleteData } from './ModalContentDeleteData';

export function Modal() {
  const modalType = useSelector<RootState, ModalType>(state => state.modalType);
  const tasks = useSelector<RootState, Task[]>(state => state.Local.arrayOfTasks)
  const activeID = useSelector<RootState, number>(state => state.activeMenuID);
  const active = tasks.find((e) => e.id === activeID)
  if (typeof active === 'undefined') {
    if (modalType !== IS_NOT_OPEN) {
      document.body.style.overflow = 'hidden'
    }
    return (
    <div className={modalType !== IS_NOT_OPEN ? 'modal modalOpen' : "modal"}>
        {modalType === MODAL_OPEN_DELETE_DATA && <ModalContentDeleteData />}
      </div>)
}
  if (modalType !== IS_NOT_OPEN) {
    document.body.style.overflow = 'hidden'
  }
  return (
    <div className={modalType !== IS_NOT_OPEN ? 'modal modalOpen' : "modal"}>
      {modalType === OPEN_MODAL_PLUS && <ModalContentPlus active={active} />}
      {modalType === OPEN_MODAL_MINUS && <ModalContentMinus active={active} />}
      {modalType === OPEN_MODAL_CHANGE && <ModalContentChange active={active} />}
      {modalType === OPEN_MODAL_DELETE && <ModalContentDelete active={active} />}
    </div>
  );
}
