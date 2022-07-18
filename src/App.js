import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
