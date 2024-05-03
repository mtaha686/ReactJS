import { useState } from "react";
import "./App.css";
import FormComponent from "./components/login";

function App() {
  const [userisRegisterd, setIsRegisterd] = useState("true");

  return (
    <div className="container">
      <FormComponent isRegisterd={userIsRegistered}></FormComponent>
    </div>
  );
}

export default App;
