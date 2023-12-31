import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Landing from './views/Landing/Landing';
import { Home } from './views/Home/Home';
import { Detail } from './views/Detail/Detail';
import { NavBar } from './components/NavBar/NavBar';
import { Form } from './views/Form/Form';

function NavBarOrLanding() {
  const location = useLocation();
  return location.pathname === '/' ? <Landing /> : <NavBar />;
}

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBarOrLanding />
      <Routes>
        <Route path='/home' element = {<Home />} />
        <Route path='/home/detail/:id' element={<Detail />} />
        <Route path='/createPokemon' element={<Form />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
