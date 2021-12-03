import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Champs from './components/Champs';
import ChampShow from './components/ChampShow';
import ChampNew from './components/ChampNew';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/champs" element={<Champs/>} />
        <Route path="/champs/new" element={<ChampNew/>} />
        <Route path="/champs/:id" element={<ChampShow/>} />
      </Routes>
    </div>
  );
}

export default App;
