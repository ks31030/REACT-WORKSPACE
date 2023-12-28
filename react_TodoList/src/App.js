import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from './component/TodoList';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
function App (){
    return (
        <Router>
            <div>
                <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/todo">할 일 목록</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path="/" element={<Home/>} />
                
                    <Route path="/todo" element={<TodoList/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}
export default App;