import React from 'react';
import Advantages from './Advantages/Advantages.jsx';


function App() {
  return (
    <div className="main-page">
      <header>
          <h1> Header </h1>
      </header>
        <main>
            <h2> Main</h2>
            Проверка
            <Advantages />
        </main>
        <footer>
            <h2> Footer</h2>

        </footer>
    </div>
  );
}

export default App;