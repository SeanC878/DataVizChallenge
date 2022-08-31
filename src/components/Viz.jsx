import './Viz.css';
import * as d3 from 'd3'

export default function Visual(data) {
 
  d3.selectAll('.viz svg').remove();

  const sorted = data.data.sort((a, b) => d3.descending(a.mean, b.mean));

  const margin = { top: 20, right: 30, bottom: 40, left: 170 },
    width = 1000 - margin.left - margin.right,
    height = 3000 - margin.top - margin.bottom;


  const svg = d3.select(".viz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const x = d3.scaleLinear()
    .domain([0, 22])
    .range([0, width]);

  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))

  const y = d3.scaleBand()
    .range([0, height])
    .domain(sorted.map(d => d.location_name))
    .padding(.5);
  
  svg.append("g")
    .call(d3.axisLeft(y))

  svg.selectAll('rect')
    .data(sorted)
    .join("rect")
    .attr("x", x(0))
    .attr("y", d => y(d.location_name))
    .attr("width", d => x(d.mean))
    .attr("height", y.bandwidth())
    .attr("fill", "#69b3a2")

  return (
    <>
        <div className="bodyContainer">
          <div className="titleContainer">
            <h1>Opioid Death Rates By Country, 1990 - 2017</h1>
            <h2>Mean Average of Estimates per 100,000 People</h2>
          </div>
          <div className="vizContainer">
            <div className="viz">
              
            </div>
          </div>
        </div>
    </>
  )
}
