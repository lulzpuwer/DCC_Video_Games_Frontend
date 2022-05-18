// react imports
import React, { useState, useEffect } from 'react';

// Axios Imports
import axios from 'axios';

// Components
import GameTable from './Components/GameTable/GameTable';
import Searchbar from './Components/SearchBar/SearchBar';
import DataChart from './Components/DataChart/DataChart';

// css imports
import './App.css'

function App() {

// all hooks for console global sales // ,"X360","PS3","DS","Wii","GBA","PS2","PS","SNES","NES","GB"

  const [games, setGames] = useState([]);
  
  
  
  
  
  useEffect(() => {
    GetAllGames();
  },[])


  async function GetAllGames(){
    let response = await axios.get("https://localhost:7260/api/games/");
    console.log(response.data);
    setGames(response.data)
  }

  

  return (
    <div >
      <DataChart games={games} setGames={setGames}/>
      <GameTable games ={games} />
   
    </div>
  );

}

export default App;
 