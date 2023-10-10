import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../style/Footer.css"
import Reserve from './Reserve';

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>
          <Route path='/reserve' element={<Reserve />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
