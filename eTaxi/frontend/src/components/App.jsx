import React from 'react';
import Advantages from './Main/Section2/Advantages/Advantages.jsx';
import Header from "./Header/Header.jsx";
import Hero from "./Main/Section1/Hero.jsx";


function App() {
  return (
    <div className="main-page">
      <header>
          <Header/>
      </header>
        <main>
            <div className="section-1">
                <Hero/>
            </div>
            <Advantages />
        </main>
        <footer>
            <h2> Footer</h2>

        </footer>
    </div>
  );
}

export default App;