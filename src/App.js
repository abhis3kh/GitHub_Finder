import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import User from './pages/User';
import NotFound from './pages/NotFound';
import { GitHubProvider } from './context/github/GithubContext';
const App = () => {
  return (
    <GitHubProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GitHubProvider>
  );
};
export default App;
