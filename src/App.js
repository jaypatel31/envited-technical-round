import { Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage/LandingPage';
import './App.css';
import CreatePage from "./pages/CreatePage/CreatePage";
import EventPage from "./pages/EventPage/EventPage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact={true} element={<LandingPage/>} />
          <Route path="/create" exact={true} element={<CreatePage/>} />
          <Route path="/event" exact={true} element={<EventPage/>} />
        </Routes>
        
    </div>
  );
}

export default App;
