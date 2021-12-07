import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
  <div>
    <p><input type="file"  accept="image/*" name="image" id="file"  onchange="loadFile(event)" style={{display:" none;"}}/></p>
<p><label for="file" style={{cursor: "pointer;"}}>Upload Image</label></p>
<p><img id="output" width="200" /></p>

  </div>

  );
}

export default Dashboard;
