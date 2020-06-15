import React, { Component } from 'react';
import { findByLabelText } from '@testing-library/react';

class AnsweredQuestion extends Component {
    render() {
        return (
            <div>
                <div className="container"
                    style={{
                        marginTop: '10%'
                    }}
                >

                    <div className="card testimonial-card w-50 mx-auto">
                        <div className="card-header bg-warning">
                            <h5>John Doe Asks</h5>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="avatar white">
                                    <img className="rounded-circle"
                                        alt="avatar1"
                                        style={{
                                            padding: '10px',
                                            height: '170px',
                                            width: '170px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="col-8">
                                <div className="card-body bg-light">
                                    <h3 className="card-title">Results:</h3>
                                    <div className="card border-success ">
                                        <div className="card-body">
                                            <h5 className="card-title">Would Your rather do this</h5>
                                            <div class="progress">
                                                <div class="progress-bar bg-success" style={{width:'20%'}}>20%</div>
                                            </div>
                                            <p class="card-text text-center">2 out of 5 votes</p>
                                        </div>
                                    </div>
                                    <div className="card border-success">
                                        <div className="card-body">
                                            <h5 className="card-title">Would you</h5>
                                            <div class="progress">
                                                <div class="progress-bar bg-success" style={{width:'20%'}}>20%</div>
                                            </div>
                                            <p class="card-text text-center">2 out of 5 votes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div>
        );
    }
}

export default AnsweredQuestion;