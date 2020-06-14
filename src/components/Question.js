import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <div className="container"
                style={{
                    marginTop: '10%'
                }}
            >

                <div className="card testimonial-card w-50 mx-auto">
                    <div className="card-header text-center bg-warning">
                        <h5>Tyler Mcginnis Asks</h5>
                    </div>

                    <div class="card-up"></div>


                    <div className="row">
                        <div className="col-4">
                            <div className="avatar white">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-circle"
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
                            <div className="card-body bg-light">

                                <h2 className="card-title">Would You Rather...</h2>
                                <form >
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                        <label className="form-check-label" for="exampleRadios1" >
                                            be a front-end developer
                                        </label>
                                    </div>
                                    <div className="form-check" style ={{marginTop : '10px' , marginBottom : '10px'}}>
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" for="exampleRadios2" >
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