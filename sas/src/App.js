import logo from "./logo.svg";
import "./App.css";
import SyncedPlaceData from "./SyncedPlaceData";

function App() {

  console.log("Here0");
  const placesJson = SyncedPlaceData(0, 1500, "restaurant");
  console.log(placesJson);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
