import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Todo from "./pages/todo";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import { TemaContext } from "./context/TemaContext";
import { TodoContext } from "./context/TodoContext";
import { TodoService } from "./utils/TodoService";

function App() {
  const tema = useContext(TemaContext);
  const todoService: TodoService = new TodoService()

  const renderizarBotoes = () => (
    <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </nav>
        <h2>{tema}</h2>
      </div>
  );

  return (
    <TemaContext.Provider value={'dark'}>
        <Router>
          {renderizarBotoes()}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={
              <TodoContext.Provider value = {{ todoService }}>
                <Todo />
              </TodoContext.Provider>
            } />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </Router>
        </TemaContext.Provider>
  );
}

export default App;
