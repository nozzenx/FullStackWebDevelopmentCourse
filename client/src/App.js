import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to = "/" style = {{textDecoration: "none", color: "black"}}>Home</Link>
        <Link to = "/createpost" style = {{textDecoration: "none", color: "black"}}>Create Post</Link>
        <Routes>
          <Route path = "/" element = {<Home/>}/> // Adding default home page to the router.
          <Route path = "/createpost" element = {<CreatePost/>}/> // Adding default home page to the router.
        </Routes>
      </Router>
    </div>
  );
}

export default App;
