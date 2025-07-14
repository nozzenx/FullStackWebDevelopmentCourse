import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Link to = "/" style = {{textDecoration: "none", color: "black"}}>Home</Link>
          <Link to = "/createpost" style = {{textDecoration: "none", color: "black"}}>Create Post</Link>
        </div>
        <Routes>
          <Route path = "/" element = {<Home/>}/> // Adding default home page to the router.
          <Route path = "/createpost" element = {<CreatePost/>}/> // Adding default home page to the router.
          <Route path = "/post/:id" element = {<Post/>}/> // Adding post page with id for individual posts.
        </Routes>
      </Router>
    </div>
  );
}

export default App;
