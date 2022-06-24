import React from 'react';
import './App.css';
import Aside from './componentes/Aside';
import Header from './componentes/Header';
import Sectionvideos from './componentes/Sectionvideos'

function App() {
  return (
    <body className="body-app"> 
      <Header />
      <main className="body_main">
        <Aside />
        <Sectionvideos />
      </main>
    </body>
  );
}

export default App;
