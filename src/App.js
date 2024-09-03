import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';

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
        </Routes>
      </p>
    </div>
   </BrowserRouter>
    
  );
}

export default App;
