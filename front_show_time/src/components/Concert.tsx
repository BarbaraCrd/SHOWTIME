import React, { Component } from 'react';
import {useRef, useState, useEffect } from 'react';
import axiosRequest from '../api/Requests';
import { apiUrl } from '../apiUrl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import {Button, Card, CardImg, Col, Form} from "react-bootstrap";
import TypeData from '../types/api.types';
import '../style/Concert.css'

export default function Concert() {


  const [concerts, setConcerts] = useState<Array<TypeData>>([]);
  const [query, setQuery] = useState("")
  
// fetch all concerts from data
useEffect(() => {
  //setConcerts(true);
  const getConcerts = () => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3030/concerts", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => setConcerts(result))
      .catch(error => console.log('error', error));
  }
  getConcerts()
    // console.log(concerts)
    //.then(setConcerts(false));
}, []);




    return ( 
      <>
      
  <Col className="col" xs={4}>
      <Form.Control placeholder="Filter by artist or date" onChange={event => setQuery(event.target.value)}  />
      </Col>
       {concerts.filter(concert => {
    if (query === '') {
      return concerts;
    } else if (concert.artist.toLowerCase().includes(query.toLowerCase())|| concert.date.toLowerCase().includes(query.toLowerCase())) {
      return concerts;
    }
    }).map((concert : any)=>{ return ( 
      <Card style={{ width: '18rem' }} className='card-wrap' >
        <CardImg variant="top" src="../images/show.png" ></CardImg>
        <Card.Body>
      <Card.Title className='concert-title'> {concert.tour} </Card.Title>
      <Card.Text className='artist'> {concert.artist} </Card.Text>
      <h5> {concert.date} </h5>
      <h6> ${concert.price} </h6>
      <Link to={{pathname: `/concert/${concert._id}`}}>  <Button variant="primary">Show event</Button>  </Link>
      </Card.Body>
      </Card>) })}
     
      </>
      
    );
  }


