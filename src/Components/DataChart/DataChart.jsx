import React, { useState , useEffect } from 'react';
import {Chart} from "react-google-charts"

const DataChart = (props) => {

const [dataEntry, setDataEntry] = useState([]);

useEffect(() => {
  GetAllGames();
},[])


async function GetAllGames(){
  let response = await axios.get("https://localhost:7260/api/games/");
  console.log(response.data);
  setGames(response.data)
}

useEffect(() => {
  // let pcGlobalSales = 0;
  let pcSalesData = [];
  console.log(props.games.length)
  if(props.games.length !== 0){
    pcSalesData = props.games.filter(
      (game) => (game.platform == "PS3"))
  }
    // .reduce((prevGlobalSales, currentGlobelSales)=>prevGlobalSales+currentGlobelSales,pcGlobalSales) 
  ;
  console.log(pcSalesData)
  setDataEntry(pcSalesData)
},[])



    return ( 
      <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={[["Console","Global Sales"], ...dataEntry]}
    />
    );

    
}
 
export default DataChart;





// ,"X360","PS3","DS","Wii","GBA","PS2","PS","SNES","NES","GB"
