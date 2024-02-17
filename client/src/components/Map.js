import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { geoPath, geoMercator } from "d3-geo";
import Modal from "react-bootstrap/Modal";

import "../assets/css/Map.css";

const Map = () => {
  const svgRef = useRef();
  const [modalData, setModalData] = useState({ show: false, room: null });

  const handleClose = () => {
    setModalData({ show: false, room: null });
  };

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

        const width = 1200;
        const height = 800;

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

        svg.attr("transform", function () {
          var me = svg.node();
          var x1 = me.getBBox().x + me.getBBox().width / 2; //the center x about which you want to rotate
          var y1 = me.getBBox().y + me.getBBox().height / 2; //the center y about which you want to rotate

          return `rotate(26, ${x1}, ${y1})`; //rotate 180 degrees about x and y
        });

        svg
          .selectAll("text")
          .data(data.features)
          .enter()
          .append("text")
          .attr("text-anchor", "middle")
          .attr("transform", (d) => {
            const centroid = path.centroid(d.geometry);
            return `translate(${centroid[0]}, ${centroid[1]}) rotate(-26)`;
          })
          .style("font-size", "10px")
          .text((d) => d.properties.name);
      } catch (error) {
        console.error("Error fetching or rendering GeoJSON data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (event, feature) => {
    console.log("Clicked on room:", feature.properties.name);
    setModalData({ show: true, room: feature.properties.name });

    // d3.select(event.target).style("fill", "red");
  };

  return (
    <>
      <div className="mapPage">
        <div className="Info">
          <h2>Select date and time:</h2>
          <input type="datetime-local" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <h1>FMI : Second Floor</h1>
        </div>

        <br />

        <svg className="Map" ref={svgRef} width={1200} height={800}></svg>
      </div>

      <Modal show={modalData.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Create A Reservation For Room {modalData.room}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
              <div class="row">
                <div class="col">
                  <label for="start">Starts At</label>
                  <input type="datetime-local" id="start" class="form-control" placeholder="First name" />
                </div>
                <div class="col">
                  <label for="end">Ends At</label>
                  <input type="datetime-local" id="end" class="form-control" placeholder="Last name" />
                </div>
              </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <button class="btn btn-primary" onClick={handleClose}>
            Create
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Map;
