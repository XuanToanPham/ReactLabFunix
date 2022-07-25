import { useRef } from "react";
import Modal from "./Modal/Modal";

const FormLogin = (props) => {
  const email = useRef("");
  const password = useRef("");
  const remember = useRef(false);
  const submitHandler = (e) =>{
    e.preventDefault()
    alert(`Email: ${email.current.value}, Password: ${ password.current.value}, Check Remember: ${ remember.current.value}`)
  }
  return (

    <Modal onHide={props.onHide}>
      <form onSubmit={submitHandler}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            ref={email}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            ref={password}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              ref={remember}
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-primary col-6">
            Submit
          </button>
          <button type="button" className="btn btn-danger col-6" onClick={props.onHide}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default FormLogin;
