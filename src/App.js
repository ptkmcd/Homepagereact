import React from 'react';
import './App.css';
import Header from './components/Header';
import Conteudo from './components/Conteudo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;
