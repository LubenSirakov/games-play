import { useState } from "react";

import Header from "./components/Header.js";
import WelcomeWorld from "./components/WelcomeWorld.js";
import GameCatalog from "./components/GameCatalog.js";
import CreateGame from "./components/CreateGame.js";

function App() {
  const [page, setPage] = useState('/home');

  const routes = {
    '/home': < WelcomeWorld />,
    '/games': <GameCatalog />,
    '/create-game': <CreateGame />
  };

  const navigationChangeHandler = (path) => {
    setPage(path);
  }

  return (
    <div id="box">

      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        {routes[page] || <h2>No Page Found</h2>}
      </main>

    </div>
  );
}

export default App;
