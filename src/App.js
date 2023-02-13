import './App.css'
import Home from './components/Home/Home';
import Home1 from './components/Home/Home1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home1 />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/lover" element={<Landing />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
