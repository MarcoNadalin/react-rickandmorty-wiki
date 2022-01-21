import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home.jsx';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>    
  );
}

export default App;
