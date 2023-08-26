import { useState } from 'react';
import Home from './components/NewHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInForm from './components/LogInForms';
import SignUpForm from './components/SignUpForm';
function App() {
  const [open, setOpen] = useState(false);

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignUpForm/>}></Route>
        <Route path='/login' element={<LogInForm/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
