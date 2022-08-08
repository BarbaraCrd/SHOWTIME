import React from 'react';
import axios from 'axios';
import {useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import {Button, Navbar, Col, Container, Form, Row, Nav, NavDropdown, InputGroup} from "react-bootstrap";
import Sidebar from './SideBar';
import CarouselMod from './Caroussel';
import '../style/Home.css';
import Concert from './Concert';
import SearchBar from './SearchBar';
import NavBar from './NavBar';


export const Home= () =>{

    return (
      
      <div>
        <Container fluid>
         <NavBar></NavBar>
  
          <Row className="flex xl nowrap">
            <Col xs={2} id="sidebar-wrapper">
                  <Sidebar />
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <div className='carousel_band'>
              <CarouselMod/>
              </div>
              <div className='concert-wrapper'>
              <Concert></Concert>
              </div>
            </Col>
          </Row>

        </Container>
        </div>
      );


}


export default Home;