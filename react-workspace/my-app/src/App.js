//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './js/Blog';
const About = () => <div>소개페이지</div>;
/*
const About = () => {
return (
  <div>소개페이지</div>
  )
}
*/
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;