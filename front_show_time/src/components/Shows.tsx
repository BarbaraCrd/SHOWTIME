import React from 'react';
import axios from 'axios';
import {useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import {Navigate} from "react-router-dom";
import {Button, Col, Card, Container, Form, Row} from "react-bootstrap";

export const Shows = () =>{

      return (

            <Card>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>genre:</Card.Text>
                <Card.Text>date:</Card.Text>
                <Button variant="primary">Book</Button>
              </Card.Body>
            </Card>
      )
}

export default Shows;