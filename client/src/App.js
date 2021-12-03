import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Champs from './components/Champs';
import ChampShow from './components/ChampShow';
import ChampNew from './components/ChampNew';
import ChampEdit from './components/ChampEdit';
import MoveNew from './components/MoveNew';
import Move from './components/Move';
import MoveEdit from './components/MoveEdit';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/champs" element={<Champs/>} />
        <Route path="/champs/new" element={<ChampNew/>} />
        <Route path="/champs/:id" element={<ChampShow/>} />
        <Route path="/champs/:id/edit" element={<ChampEdit/>} />
        <Route path="/champs/:id/moves/new" element={<MoveNew/>} />
        <Route path="/champs/:champ_id/moves/:id" element={<Move/>} />
        <Route path="/champs/:champ_id/moves/:id/edit" element={<MoveEdit/>} />
      </Routes>
      <br />
      <NavBar />
    </div>
  );
}

export default App;
