import ReactDOM from 'react-dom';
import { Fragment, useContext } from 'react';
import style from './Modal.module.css';


const Backdrop = () => {
  return <div className={style.backdrop} />
}

const ModalOverlay = props => {
  return <div className={style.modal}>
    <div className={style.content}>{props.children}</div>
  </div>
} 

const portalElement = document.getElementById('overlays');


const Modal = props => {
  return (
    <Fragment>      
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}



export default Modal
