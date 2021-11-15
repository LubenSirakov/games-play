import { useState } from "react";

import Header from "./components/Header.js";
import WelcomeWorld from "./components/WelcomeWorld.js";
import GameCatalog from "./components/GameCatalog.js";
import CreateGame from "./components/CreateGame.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import ErrorPage from "./components/ErrorPage.js";

function App() {
  const [page, setPage] = useState('/home');

  const routes = {
    '/home': < WelcomeWorld />,
    '/games': <GameCatalog />,
    '/login': <Login />,
    '/register': <Register />,
    '/create-game': <CreateGame />
  };

  const navigationChangeHandler = (path) => {
    setPage(path);
  }

  return (
    <div id="box">

      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        {routes[page] || <ErrorPage />}
      </main>

    </div>
  );
}

export default App;
