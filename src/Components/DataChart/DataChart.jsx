import React, { useState , useEffect } from 'react';
import {Chart} from "react-google-charts"

const DataChart = (props) => {

const [dataEntry, setDataEntry] = useState([]);

useEffect(() => {
  let tempData = props.games.map(game =>{
    return [game.platform, game.globalSales]
  });
  setDataEntry(tempData)
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
