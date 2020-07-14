import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap'



const Navigationbar = () => {
  return (
    <div>
      <Row className="user-login">
        <Col xs={12} md={11}>
        </Col>
        <Col xs={6} md={1}>
          <Link to="/cart"><i class="far fa-shopping-cart" style={{ color: "white", margin: "0px 20px" }}></i></Link>
          <Link to="/user"><i class="far fa-head-side" style={{ color: "white" }} ></i></Link>
        </Col>
      </Row>

      <Row>
        <Col xs={8} md={7}>
          <Navbar>
            <Link to="/"><h1 style={{fontWeight:"bolder"}}>BEYOND</h1></Link>
          </Navbar>
        </Col>

        <Col xs={4} md={5}>
          <Form>
            <i class="far fa-search" style={{ color: "white", margin:"5px 20px"}}></i>

            <FormControl type="text" placeholder="Search" className="mr-sm-2 search"/>

          </Form>

        </Col>

      </Row>

      <Row className="breadcrumbs" style={{margin:"5px 20px"}}>
        <Link to="/events"><h1>EVENTS</h1></Link>
        <Link to="/explore"><h1>EXPLORE</h1></Link>
        <Link to="/artists"><h1>ARTISTS</h1></Link>
        <Link to="/shop"><h1>STORE</h1></Link>

      </Row>

    </div>


  )
}

export default Navigationbar
