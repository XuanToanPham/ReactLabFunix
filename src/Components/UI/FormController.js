import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./FormController.module.css";
const FormContact = () => {
  const [valueForm, setValueForm] = useState({
    firstname: "",
    lastname: "",
    telNum: "",
    email: "",
    agree: false,
    contactType: "Tel",
    message: "",
    touched: {
      firstname: false,
      lastname: false,
      telNum: false,
      email: false,
    },
  });
  let addValue = valueForm;
  const [isValid, setIsValid] = useState({
    firstName: true,
    lastname: true,
    telNum: true,
    email: true,
  });
  let validInput = {
    firstName: true,
    lastname: true,
    telNum: true,
    email: true,
  };

  
  const  [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    telnum: '',
    email: ''
  })
  const changeHandlerFistName = (event) => {
    console.log(event.target.value);
    addValue.firstname = event.target.value;
    addValue.touched.firstname = true;
    setValueForm(addValue);
    validInput = { ...validInput, firstName: true };
    if (valueForm.firstname.length > 10 && valueForm.touched.firstname === true) {
      validInput = { ...validInput, firstName: false };
      setIsValid(validInput);
      setErrors({...errors, firstname : "First Name should be <=10 characters"})
    }
    else if(valueForm.firstname.length < 3  && valueForm.touched.firstname === true){
      validInput = { ...validInput, firstName: false };
      setIsValid(validInput);
      setErrors({...errors, firstname : "First Name should be >=3 characters"})
    }
    else{
      validInput = { ...validInput, firstName: true };
      setIsValid(validInput);
      setErrors({...errors, firstname : ""})
    }
    console.log(validInput);
  };
  const changeHandlerLastName = (event) => {
    console.log(event.target.value);
    addValue.lastname = event.target.value;
    addValue.touched.lastname = true;
    setValueForm(addValue);
    console.log(valueForm);
    validInput = { ...validInput, lastname: true };
    if (valueForm.lastname.length > 10 && valueForm.touched.lastname === true) {
      validInput = { ...validInput, lastname: false };
      setIsValid(validInput);
      setErrors({...errors, lastname : "Last Name should be <=10 characters"})
    }
    else if(valueForm.lastname.length < 3  && valueForm.touched.lastname === true){
      validInput = { ...validInput, lastname: false };
      setIsValid(validInput);
      setErrors({...errors, lastname : "Last Name should be >=3 characters"})
    }
    else{
      validInput = { ...validInput, lastname: true };
      setIsValid(validInput);
      setErrors({...errors, lastname : ""})
    }
  };
  const changeHandlerTelNum = (event) => {
    console.log(event.target.value);
    addValue.telNum = event.target.value;
    setValueForm(addValue);
    console.log(valueForm);
    addValue.touched.telNum = true;
    validInput = { ...validInput, telNum: true };
    const reg =/^\d+$/;
    if (valueForm.telNum === "" && valueForm.touched.telNum === true) {
      validInput = { ...validInput, telNum: false };
      setIsValid(validInput);
      setErrors({...errors, telnum : "Please enter"})

    }
    else if (reg.test(validInput.telNum) && valueForm.touched.telNum === true){
      validInput = { ...validInput, telNum: false };
      setIsValid(validInput);
      setErrors({...errors, lastname : "Tel. Number should contain only numbers"})

    }
    else{
      validInput = { ...validInput, telNum: true };
      setIsValid(validInput);
      setErrors({...errors, telnum : ""})
    }
  };
  const changeHandlerEmail = (event) => {
    console.log(event.target.value);
    addValue.email = event.target.value;
    setValueForm(addValue);
    addValue.touched.email = true;
    validInput = { ...validInput, email: true };
    if (valueForm.email === "" && valueForm.touched.email === true) {
      validInput = { ...validInput, email: false };
      setIsValid(validInput);
      setErrors({...errors, email : "Please Enter"})

    }
    else if(!valueForm.email.includes("@") && valueForm.touched.email === true){
      validInput = { ...validInput, email: false };
      setIsValid(validInput);
      setErrors({...errors, email : "Email should contain a @"})

    }
    else{
      validInput = { ...validInput, email: true };
      setIsValid(validInput);
      setErrors({...errors, email : ""})
    }
  };
  const agreeChangeHandler = (event) =>{
    setValueForm({...valueForm, agree: event.target.value});
  }
  const contacTypeChangeHandler = (event) =>{
    setValueForm({...valueForm, contactType: event.target.value});
  }
  const messageChangeHandler = (event) =>{
    setValueForm({...valueForm, message: event.target.value});
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(valueForm);
    alert(`First Name: ${valueForm.firstname}, Last Name: ${valueForm.lastname}, Tel Num: ${valueForm.telNum}, Email: ${valueForm.email}, Agree: ${valueForm.agree}, Contact: ${valueForm.contactType}, Message: ${valueForm.message}`)
  };
  return (
    <div className="row row-content">
      <div className="col-12">
        <h3>Send us your Feedback</h3>
      </div>
      <div className="col-12 col-md-9">
        <Form onSubmit={submitHandler}>
          <Form.Group
            className={`mb-3 ${!isValid.firstName ? classes.error : ""}`}
          >
            <Form.Label htmlFor="input-first-name">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              id="input-first-name"
              onChange={changeHandlerFistName}
            />
            {!isValid.firstName ? <Form.Text>{errors.firstname}</Form.Text> : ""}
          </Form.Group>

          <Form.Group  className={`mb-3 ${!isValid.lastname ? classes.error : ""}`}>
            <Form.Label htmlFor="input-last-name">Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              id="input-last-name"
              onChange={changeHandlerLastName}
            />
             {!isValid.lastname ? <Form.Text>{errors.lastname}</Form.Text> : ""}
          </Form.Group>

          <Form.Group  className={`mb-3 ${!isValid.telNum ? classes.error : ""}`}>
            <Form.Label htmlFor="input-telnum">Tel</Form.Label>
            <Form.Control
              type="number"
              placeholder="Tel"
              id="input-telnum"
              onChange={changeHandlerTelNum}
            />
             {!isValid.telNum ? <Form.Text>{errors.telnum}</Form.Text> : ""}
          </Form.Group>

          <Form.Group  className={`mb-3 ${!isValid.email ? classes.error : ""}`}>
            <Form.Label htmlFor="input-email">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id="input-email"
              onChange={changeHandlerEmail}
            />
            {!isValid.email ? <Form.Text>{errors.email}</Form.Text> : ""}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="May we contact you?"
              onChange={agreeChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="select" className="form-select" onChange={contacTypeChangeHandler} >
              <option>Tel.</option>
              <option>Email</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="input-feedback">Your Feedback</Form.Label>
            <Form.Control as="textarea" rows={3} id="input-feedback" onChange={messageChangeHandler} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default FormContact;
