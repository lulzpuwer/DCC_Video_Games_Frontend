import React, { useState , useEffect } from 'react';
import {Chart} from "react-google-charts"

const DataChart = (props) => {

  
  
  
const [dataEntry, setDataEntry] = useState([]);

useEffect( () => {
  let tempDataEntry = props.games.map( entry => {
    return [entry.platform, entry.globalSales]; 
  });
    setDataEntry(tempDataEntry)
  console.log(dataEntry)
},[])



  return ( 
    <div className='top'>
    <Chart 
    chartType="Bar"
    width="100%"
    height="400px"
    data={[["Console","Global Sales",] , ...dataEntry]}
    options={{   
      title: 'Global Sales per Console after 2013',
      hAxis:{ title: "Global Sales"},
      vAxis:{ minValue: 0}

    

    }}
  />  
  </div>
  );

   
}

export default DataChart;




// ,"X360","PS3","DS","Wii","GBA","PS2","PS","SNES","NES","GB"
