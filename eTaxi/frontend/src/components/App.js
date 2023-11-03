import React from 'react';
import Logo from "./Logo";

function App() {
  return (
    <div className="main-page">
      <header>
            <Logo/>
          <h1> Header </h1>
      </header>
        <main>
            <h2> Main</h2>
        </main>
        <footer>
            <h2> Footer</h2>

        </footer>
    </div>
  );
}

export default App;