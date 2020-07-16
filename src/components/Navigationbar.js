import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch', 
    
    },
  },
}));

const Navigationbar = () => {
  

  const classes = useStyles(); 

  
  return (
    <div>
      <Row className="user-login">
        <Col xs={12} md={10}>
        </Col>
        <Col xs={6} md={2}>
          <Link to="/cart"><i class="far fa-shopping-cart" style={{ color: "white", margin: "0px 10px" }}></i></Link>
          <Link to="/user"><i class="fa fa-sign-in" style={{ color: "white", margin: "0px 10px" }}></i></Link>
          <Link to="/me"><i class="far fa-head-side" style={{ color: "white", margin: "0px 10px" }} ></i></Link>
        </Col>
      </Row>

      <Row>
        <Col xs={8} md={7}>
          <Navbar>
            <Link to="/"><h1 style={{ fontWeight: "bolder" }}>BEYOND</h1></Link>
          </Navbar>
        </Col>

        <Col xs={4} md={5}>
          
        <div className="row">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" className="text-field"/>
          </form>
          <i class="fa fa-search" aria-hidden="true" style={{color:"white", lineHeight:"60px"}}></i>

        </div>
         

       
        </Col>

      </Row>

      <Row className="breadcrumbs" style={{ margin: "5px 20px" }}>
        <Link to="/artists"><h1>ARTISTS</h1></Link>
        <Link to="/explore"><h1>EXPLORE</h1></Link>
        <Link to="/events"><h1>EVENTS</h1></Link>
        <Link to="/shop"><h1>STORE</h1></Link>

      </Row>

    </div>


  )
}

export default Navigationbar

