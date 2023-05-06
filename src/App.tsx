import React from 'react';
import './App.css';
import Home from './Pages/page';
import Navbar from './Components/NavBar/Navbar';
import Menu from './Menu/Menu';
import Locations from './Location/Location';
import Contact from './Contact/Contact';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/Menu":
      component = <Menu/>
      break
    case "/Location":
      component = <Locations/>
      break
    case "/Contact":
      component = <Contact/>
      break

  }
  return (
    <div className="App">
      {component}
    </div>
  );
}

export default App;
