import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { geoPath, geoMercator } from "d3-geo";

const D3Map = () => {
  const svgRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("map-second-floor.geojson", {
          headers: {
            accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch GeoJSON: ${response.statusText}`);
        }

        const data = await response.json();

        const width = 800;
        const height = 500;

        const svg = d3.select(svgRef.current);

        const projection = geoMercator().fitSize([width, height], data);
        const path = geoPath().projection(projection);

        svg
          .selectAll("path")
          .data(data.features)
          .enter()
          .append("path")
          .attr("d", path)
          .style("fill", "green")
          .style("stroke", "white")
          .style("stroke-width", 0.5)
          .on("click", handleClick);
      } catch (error) {
        console.error("Error fetching or rendering GeoJSON data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (event, feature) => {
    // You can access the clicked feature and perform actions here
    console.log("Clicked on feature:", feature.properties.name);

    d3.select(event.target).style("fill", "red");
  };

  return (
    <svg
      ref={svgRef}
      width={800}
      height={500}
      style={{ border: "1px solid black" }}
    ></svg>
  );
};

export default D3Map;
