import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from "react-router-dom";
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { Navigationbar, SigningUp, Footer, Loading } from '../components';
import Moment from 'react-moment';


const EventDetail = (props) => {
    const dispatch = useDispatch()
    let history = useHistory()
    const user = useSelector(s => s.user)
    const cart = useSelector( s=>s.cartReducer.purchases)

    let [eventDetail, setEventDetail] = useState([]);
    let { eventId } = useParams();
    let [availableTicket, setAvailableTicket] = useState(eventDetail.availableTicket)
    const [ticket, setTicket] = useState(0)
    let [price, setPrice] = useState(0)
    const loading = useSelector(state => state.app.loading)
  
   
    useEffect(() => {
        dispatch({ type: "LOADING" })
        console.log("id is", eventId)
        axios.get(`http://localhost:5000/events/${eventId}`).then((res) => {
            console.log("single event data is", res.data)
            setEventDetail(res.data.data)
            dispatch({ type: "LOADED" })
        })
    }, []);

    const addTicket = () => {
        setTicket(ticket + 1)
        if (ticket === 10) {
            setTicket(10)
        }
    }

    const minusTicket = () => {
        setTicket(ticket - 1)
        if (ticket <= 0) {
            setTicket(0)
        }
    }


    if (loading) return <Loading />
    return (
        <div className="body">
            <Navigationbar />
            <div className="poster-img"><img width="630px" src={eventDetail.posterURL} /></div>
            <div style={{ paddingTop: "50px" }} className="artist-title body">
                <h1 style={{ fontSize: "120px" }}>{eventDetail.title}</h1>
                <div style={{ paddingLeft: "7px" }}>
                    <div><Moment format="DD/MM/YYYY">{eventDetail.date}</Moment>  /  {eventDetail.startTime} - {eventDetail.endTime}  /  {eventDetail.minimumAge} + </div>
                    <div><i class="fal fa-location"></i>{eventDetail.venue}</div>
                    <Row>
                        <Col md={3}>
                            Line-Up:
                        </Col>
                        <Col md={4}>
                            <div>
                                {eventDetail.lineup && eventDetail.lineup.map(item => <h4>{item.toUpperCase()}</h4>)}
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>

            <div style={{ backgroundColor: "black", paddingBottom: "30px" }}>
                <div>
                    <h1>AVAILABLE TICKET: {eventDetail.availableTicket}</h1>
                    <div>
                        <button onClick={() => minusTicket()}>-</button>
                        <h1>{ticket}</h1>
                        <button onClick={() => addTicket()}>+</button>
                        <h1>{price}</h1>
                        //Phai post api len server de update card
                        <button onClick={()=>dispatch({type:"CART_UPDATE_FROM_SERVER", payload:{event: eventDetail, count: ticket}})}>Add To Cart</button>
                    </div>

                </div>

                <Col lg={12}>
                    <div className="artist-detail">{eventDetail.description}</div>

                    <div className="breadcrumbs body">
                        <Link style={{ textDecoration: "none" }} to="/events"><i class="fal fa-long-arrow-left"></i><span className="tinytext" style={{ marginLeft: "10px" }}>BACK TO EVENTS</span></Link>
                        {user.isAdmin
                            ?
                            <div>
                                <div className="tinytext breadcrumbs" style={{ marginRight: "25px", }}>
                                    <i onClick={() => {
                                        console.log("HIHIHI", eventDetail)
                                        history.push({ pathname: `/events/update/${eventId}`, state: { eventDetail: eventDetail } })
                                    }} class="fa fa-adjust 3x" aria-hidden="true" style={{ marginRight: "20px" }}></i>
                                    <i class="fal fa-trash-alt"></i></div>
                            </div>
                            :
                            <div></div>}
                        <div></div>
                    </div>

                </Col>



            </div>


            <SigningUp />
            <Footer />

        </div>
    )
}

export default EventDetail
