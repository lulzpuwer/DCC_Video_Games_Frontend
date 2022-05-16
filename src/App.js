import React, { useState, useEffect } from 'react';
import GameTable from './Components/GameTable/GameTable'
import axios from 'axios';

function App() {


  const [games, setGames] = useState([])
  
  
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
      <GameTable games ={games} />
      
   
    </div>
  );

}
export default App;
