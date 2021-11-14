import Header from "./components/Header.js";
import WelcomeWorld from "./components/WelcomeWorld.js";
import GameCatalog from "./components/GameCatalog.js";
import CreateGame from "./components/CreateGame.js";

function App() {
  const routes = {
    '/home' : WelcomeWorld,
    '/games': GameCatalog,
    '/create-game': CreateGame
  };

  return (
    <div id="box">

      <Header />

      <main id="main-content">
      <WelcomeWorld />
      </main>

    </div>
  );
}

export default App;
