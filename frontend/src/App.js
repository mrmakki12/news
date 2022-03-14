import './App.css';
// import components/pages here
import { Header } from './Components/Header.js';
import { Footer } from './Components/Footer.js';
import { ArticlePreviews } from './Components/ArticlePreviews/ArticlePreviews.js';
// router components
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/articles' element={<ArticlePreviews />} />
          <Route exact path='/articles/:id' element={<Article />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
