import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";  
import {formCommentActions} from "../../../Redux/formComment" 
import { formLoginActions } from "../../../Redux/formLogin";
import { useDispatch } from "react-redux";
const backdrop ={
    visible: {opacity: 1},
    hidden: {opacity: 0}
}
const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "5vh",
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
const Backdrop = (props) => {
  const dispatch = useDispatch();
  const clickHandler = () =>{
    dispatch(formCommentActions.hideFormComment());
    dispatch(formLoginActions.hideFormLogin());
  }
  return <motion.div variants={backdrop} initial="hidden" animate="visible" exit={`hidden`} className={classes.backdrop} onClick={clickHandler} />;
};

const ModalOverLay = (props) => {
  return (
    <motion.div variants={dropIn} initial="hidden" animate="visible" exit={`exit`} className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </motion.div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop/>,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ModalOverLay>{props.children}</ModalOverLay>,
          portalElement
        )}
      </Fragment>
    </AnimatePresence>
  );
};

export default Modal;