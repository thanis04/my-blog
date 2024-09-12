import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <NavBar />
      <p id='page-body'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/articles' element={<ArticleListPage />}/>
          <Route path='/articles/:articleId' element={<ArticlePage />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/create-account' element={<CreateAccountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </p>
    </div>
   </BrowserRouter>
    
  );
}

export default App;
