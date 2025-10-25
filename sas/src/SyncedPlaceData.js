import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import {autoresponse} from './Autocomplete.js';

function SyncedPlaceData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
  autoresponse()
    .then(response => {
      setData(response);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
        <div>{console.log(data)}</div>
        <div>{console.log("data")}</div>
        <div>{data.suggestions[0].placePrediction.placeId}</div>
      </header>
    </div>
  );
}

export default SyncedPlaceData;
