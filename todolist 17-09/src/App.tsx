import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Todo from "./pages/todo";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import { Api } from "./utils/api/api";
import {db, auth} from "./firebaseConfig";
import { FirebaseContext } from "./context/FirebaseContext";

function App() {
  const api: Api = new Api(db, auth);
  
  const renderizarBotoes = () => (
    <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </nav>
      </div>
  );

  return (
        <Router>
          {renderizarBotoes()}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={
                <Todo />
            } />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </Router>
  );
}

export default App;
