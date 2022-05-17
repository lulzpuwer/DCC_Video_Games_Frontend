// react imports
import React, { useState, useEffect } from 'react';

// Axios Imports
import axios from 'axios';

// Components
import GameTable from './Components/GameTable/GameTable'
import DataChart from './Components/DataChart/DataChart';


function App() {


  const [games, setGames] = useState([])
  
  
  // useEffect(() => {
  //   GetAllGames();
  // },[])


  // async function GetAllGames(){
  //   let response = await axios.get("https://localhost:7260/api/games/");
  //   console.log(response.data);
  //   setGames(response.data)
  // }

  return (
    <div >
      <GameTable games ={games} />
      <DataChart games={games} />
   
    </div>
  );

}
export default App;
