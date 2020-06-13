import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <div className="container"
                style={{
                    marginTop: '10%'
                }}
            >

                <div class="card testimonial-card w-50 mx-auto">
                    <div className="card-header text-center bg-warning">
                        <h5>Tyler Mcginnis Asks</h5>
                    </div>

                    <div class="card-up"></div>


                    <div className="row">
                        <div className="col-4">
                            <div class="avatar white">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle"
                                    alt="avatar1"
                                    style={{
                                        padding: '10px',
                                        height: '200px',
                                        width: '200px'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-8">
                            <div class="card-body bg-light">

                                <h2 class="card-title">Would You Rather...</h2>
                                <form >
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                        <label class="form-check-label" for="exampleRadios1" >
                                            be a front-end developer
                                        </label>
                                    </div>
                                    <div class="form-check" style ={{marginTop : '10px' , marginBottom : '10px'}}>
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label class="form-check-label" for="exampleRadios2" >
                                            be a back-end developer
                                        </label>
                                    </div>
                                    <input type = "submit" className ="btn btn-success w-100"></input>
                                </form>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        );
    }
}

export default Question;