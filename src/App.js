import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Header from './Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Blog from './Blogs/Blog';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Footer from './Footer';
import NotFound from './NotFound';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
