import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import Tequila from "../Tequila.png";
import {Link} from "react-router-dom";
import "./Navbare.css"
export default function Navbare() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <img src={Tequila} alt="icone" height="50px" /> 
        </Navbar.Brand>
        <h1>The.Cocktail.DB</h1>
        <Nav className="mr-auto">
          <Link to="/" style={{color:"red"}} className="mr-5"><Button variant="outline-light">Home</Button></Link>
          <Link to="/aboutus" style={{color:"red"}}><Button variant="outline-light">About us</Button></Link>
        </Nav>
      </Navbar>
    </div>
  );
}
