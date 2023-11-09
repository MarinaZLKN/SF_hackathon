import React from 'react';
import Logo from "./Logo";
import YandexMaps from "./YandexMaps";
import UselessButton from './UselessButton';

function App() {
  return (
    <div className="main-page">
      <header>
            <Logo/>
          <h1> Header </h1>
      </header>
        <main>
            <h2> Main</h2>
            <YandexMaps/>
            <UselessButton/>
        </main>
        <footer>
            <h2> Footer</h2>

        </footer>
    </div>
  );
}

export default App;