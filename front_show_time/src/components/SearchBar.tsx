
    import React, { useEffect, useState } from 'react'
    import { BrowserRouter as Router, Route,Link} from "react-router-dom";
    import {Button, Col, Form, Card, CardImg} from "react-bootstrap";
    import TypeData from '../types/api.types';
    import TextField from '@material-ui/core/TextField';
      
    export default function SearchBar () {
      
        //     set search parameters
        //     search concerts by artist and date
    const [searchParam] = useState(["artist", "date"]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<any>();

         //     set search query 
    const [q, setQ] = useState("");
    const [concerts, setConcerts] = useState<Array<TypeData>>([]);  
        



  

  return (
  
    <>
        <Col xs={4}>
        <Form.Control placeholder="Search"  />
        </Col>
        <Col>
        </Col>
    </>
    );
}
