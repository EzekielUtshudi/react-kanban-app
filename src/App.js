import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Rockets from './routes/rockets/Rockets';
import Profile from './routes/profile/Profile';
import Missions from './routes/missions/Missions';
import NoMatch from './routes/noMatch/NoMatch';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
