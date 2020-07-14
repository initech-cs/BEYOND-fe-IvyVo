import React from 'react'
import {Button, Row} from 'react-bootstrap'
import '../App.css';

const SigningUp = () => {
    return (
        <div className="signing-up">
            <div>
            <h6>If not you, then who?</h6>
                <Row style={{justifyContent:"space-between"}}>
                    <h1 style={{fontSize:"60px", fontWeight:"bolder"}}>Email</h1>
                    <Button className="btn" style={{fontFamily:"Times", fontSize:"50px"}}>SIGN UP NOW</Button>

                </Row>
            

            </div>
         
        </div>
    )
}

export default SigningUp
