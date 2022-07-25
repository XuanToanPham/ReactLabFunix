import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import FormLogin from "./Components/UI/FormLogin";
import { useState } from "react";
function App() {
  const [onShow, setOnShow] = useState(false);
  const showModal = () =>{
    setOnShow(true);
  }
  const hideModal = () =>{
    setOnShow(false);
  }
  return (
    <BrowserRouter>
      <div className="App">
        {onShow && <FormLogin onHide={hideModal}/>}
        <Main onShow = {showModal} />
      </div>
    </BrowserRouter>
  );
}

export default App;
