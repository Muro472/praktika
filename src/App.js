import React from 'react';
import Router from './pages/router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <div >
        <Header />
        <div>
          <Router/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
