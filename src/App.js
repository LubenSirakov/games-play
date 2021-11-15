import { useState } from "react";

import Header from "./components/Header.js";
import WelcomeWorld from "./components/WelcomeWorld.js";
import GameCatalog from "./components/GameCatalog/GameCatalog.js";
import CreateGame from "./components/CreateGame.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import ErrorPage from "./components/ErrorPage.js";
import GameDetails from "./components/GameDetails.js";

function App() {
  const [page, setPage] = useState('/home');

  const navigationChangeHandler = (path) => {
    console.log(path);
    setPage(path);
  }



  const router = (path) => {
    let pathNames = path.split('/');

    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      'home': < WelcomeWorld />,
      'games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
      'login': <Login />,
      'register': <Register />,
      'create-game': <CreateGame />,
      'details': <GameDetails id={argument} />
    };

    return routes[rootPath]
  }

  return (
    <div id="box">

      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        {router(page) || <ErrorPage />}
      </main>

    </div>
  );
}

export default App;
