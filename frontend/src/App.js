import {
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home.jsx';
import Character from './pages/Character.jsx'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route exact path="/character" element={<Character />} />
    </Routes>    
  );
}

export default App;
