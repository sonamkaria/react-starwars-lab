import React, { useState, useEffect } from "react";
import './App.css';
import StarShipCard from "./components/StarShipCard";
import spaceautoplay from"../src/video.mp4"

function App() {

  const [shipModel, setShipModel] = useState(null)

  useEffect(() => {
    const shipURL = `https://swapi.dev/api/starships/`;
    const makeApiCall = async () => {
      const res = await fetch(shipURL);
      const json = await res.json();
      setShipModel(json)
      console.log(json)
    };
    makeApiCall();
  }, []);


  const shipNames = shipModel?.results.map((ele, index) => {
    return (
      <div>
        <StarShipCard
          key={index}
          {...ele}
        />
      </div>
    )
  });

  return (
    <div className="title">
<video autoPlay loop muted>
<source src={spaceautoplay} type = "video/mp4"/>
</video>
      <h1>Star Ships</h1>
    <div className="App">
      {shipNames}
    </div>
    </div>
  );
}

export default App;
