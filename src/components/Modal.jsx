import classes from "./Modal.module.css";

function Modal({children, onClickBg}){

    return <>
        <div className={classes.backdrop} onClick={onClickBg}/>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
    </>
}


export default Modal;
