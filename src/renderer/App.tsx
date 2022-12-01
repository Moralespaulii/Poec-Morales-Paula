import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Home() {
  let titulo = "Home";

  return (
    <div className="Home">
      <img width="200" alt="icon" src={icon} />
    </div><h1>Home</h1><div className="Home">
        <a
          href="https://classroom.google.com"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="blackboard">
              👨‍🏫
            </span>
            Classroom
          </button>
        </a>
        <a
          href="https://github.com/Moralespaulii/Poec-Morales-Paula.git"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="cat">
              😺
            </span>
            GitHub
          </button>
        </a>
      </div>
  );
}


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
