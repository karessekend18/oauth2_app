import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
        <Route path = "/" element ={<Home />}/>
        <Route path = "/dashboard" element ={<h1>Dashboard</h1>}/>

    </Routes>
  </Router>

//    <div className="App">
//        <Home />
//
//
//    </div>



  );
}

export default App;
