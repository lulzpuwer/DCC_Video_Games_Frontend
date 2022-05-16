import React, { useState } from 'react';
import {Chart} from "react-google-charts"






const DataChart = (props) => {
    return ( 
        <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={props.games}
        options ={options}
      />
    );

    
}
 
export default DataChart;






