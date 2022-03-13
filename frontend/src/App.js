import './App.css';
// import components/pages here
import { Header } from './Components/Header.js';
import { Footer } from './Components/Footer.js';
// router components
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Footer />
    </div>
  );
}

export default App;
