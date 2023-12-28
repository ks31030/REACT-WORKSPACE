import './App.css';
import Menu from './Menu';
import Todos from './Todos';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//npm i react-router-dom
//

const Home = () => <div>홈페이지</div>;

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/" />
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
