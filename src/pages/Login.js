import React, { useState, useEffect } from 'react'
import { Navigationbar, SigningUp, Footer } from '../components'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const User = () => {
    
    let history = useHistory()
    const dispatch = useDispatch()
    
    const loginFacebook = async (data) => {
        if (data && data.accessToken) {
            console.log(data.accessToken)
            const res = await fetch(`http://localhost:5000/auth/login/facebook?token=${data.accessToken}`)
            console.log("aaaa")
            if (res.ok) {
                const dt = await res.json()
                console.log("dt is", dt)
                dispatch({type:"LOGIN", payload: dt.data})
                localStorage.setItem("token", dt.token)
                history.push('/me')

            } else {
                console.log(res)
            }
        }

    }

   
    return (
        <div>
            <Navigationbar />
            {/* <div class="modal fade" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog cascading-modal" role="document"> */}

            <div class="modal-content">


                <div class="modal-c-tabs">


                    <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i class="fas fa-user mr-1"></i>
              Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#panel8" role="tab"><i class="fas fa-user-plus mr-1"></i>
              Register</a>
                        </li>
                    </ul>


                    <div class="tab-content">

                        <div class="tab-pane fade in show active" id="panel7" role="tabpanel">


                            <div class="modal-body mb-1">
                                <div class="md-form form-sm mb-5">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="email" id="modalLRInput10" class="form-control form-control-sm validate" />
                                    <label data-error="wrong" data-success="right" for="modalLRInput10">Your email</label>


                                </div>

                                <div class="md-form form-sm mb-4">
                                    <i class="fas fa-lock prefix"></i>
                                    <input type="password" id="modalLRInput11" class="form-control form-control-sm validate" />
                                    <label data-error="wrong" data-success="right" for="modalLRInput11">Your password</label>

                                </div>
                                <div class="text-center mt-2">
                                    <FacebookLogin
                                        appId="274983090404652"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        callback={loginFacebook}
                                        cssClass="my-facebook-button-class"
                                        icon="fa-facebook"
                                    />

                                    <button class="btn btn-info">Log in <i class="fas fa-sign-in ml-1"></i></button>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <div class="options text-center text-md-right mt-1">
                                    <p>Not a member? <a href="#" class="blue-text">Sign Up</a></p>
                                    <p>Forgot <a href="#" class="blue-text">Password?</a></p>
                                </div>
                                <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                            </div>

                        </div>



                        <div class="tab-pane fade" id="panel8" role="tabpanel">


                            <div class="modal-body">
                                <div class="md-form form-sm mb-5">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="email" id="modalLRInput12" class="form-control form-control-sm validate" />
                                    <label data-error="wrong" data-success="right" for="modalLRInput12">Your email</label>

                                </div>

                                <div class="md-form form-sm mb-5">
                                    <i class="fas fa-lock prefix"></i>
                                    <input type="password" id="modalLRInput13" class="form-control form-control-sm validate" />
                                    <label data-error="wrong" data-success="right" for="modalLRInput13">Your password</label>

                                </div>

                                <div class="md-form form-sm mb-4">
                                    <i class="fas fa-lock prefix"></i>
                                    <input type="password" id="modalLRInput14" class="form-control form-control-sm validate" />
                                    <label data-error="wrong" data-success="right" for="modalLRInput14">Repeat password</label>

                                </div>

                                <div class="text-center form-sm mt-2">
                                    <button class="btn btn-info">Sign up <i class="fas fa-sign-in ml-1"></i></button>
                                </div>

                            </div>

                            <div class="modal-footer">
                                <div class="options text-right">
                                    <p class="pt-1">Already have an account? <a href="#" class="blue-text">Log In</a></p>
                                </div>
                                <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* </div> */}
            {/* // </div> */}


            {/* <div class="text-center">
                <a href="" class="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalLRForm">Launch
    Modal LogIn/Register</a>
            </div> */}

            <SigningUp />
            <Footer />
        </div>
    )
}

export default User
