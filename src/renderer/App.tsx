import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ciudad from '../../assets/ciudad.jpg';
import './App.css';

function Home() {
  let titulo = "Home";

  return (
    <div>
    <div className="Home">
      <img width="200" alt="ciudad" src={ciudad} />
    </div>
    <h1>¡Bienvenido!</h1>
    <div className="Home">
      <a
        href="https://classroom.google.com/u/0/h"
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
        href="https://github.com/Moralespaulii/Poec-Morales-Paula"
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
  </div>
);
};


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
