import React from 'react'
import Plotly from 'plotly.js'
const drawPlot = (data) => {
    Plotly.newPlot('heatmap',[{
      z: data,
      type: 'heatmap'
    
  }])}
function MapPlot() {
    const [heatmap, setHeatmap] = React.useState([[1, 20, 30,24,55,45], [20, 1, 60,33,66,66], [30, 60, 1,67,88,89]]);
    React.useEffect(() => {
        drawPlot(heatmap)
      }, [heatmap])
    return (
        <div id="heatmap">
            
        </div>
    )
}

export default MapPlot
