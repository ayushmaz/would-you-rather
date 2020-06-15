import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render() {
        const { id } = this.props.match.params
        const { questions,users } = this.props
        const question = questions[id]
        const userAvatar = users[question.author].avatarURL 
        return (
            <div className="container"
                style={{
                    marginTop: '10%'
                }}
            >

                <div className="card testimonial-card w-50 mx-auto">
                    <div className="card-header text-center bg-warning">
                        <h5>{question.author} Asks</h5>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="avatar white">
                                <img src={userAvatar} className="rounded-circle"
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
                                        <input className="form-check-input" name="radioOption" type="radio" id="option1" value="option1" />
                                        <label className="form-check-label" htmlFor="option1" >
                                            {question.optionOne.text}
                                        </label>
                                    </div>
                                    <div className="form-check" style={{ marginTop: '10px', marginBottom: '10px' }}>
                                        <input className="form-check-input" name="radioOption" type="radio"  id="option2" value="option2" />
                                        <label className="form-check-label" htmlFor="option2" >
                                            {question.optionTwo.text}
                                        </label>
                                    </div>
                                    <input type="submit" className="btn btn-success w-100"></input>
                                </form>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        );
    }
}


function mapStateToProps({ questions,users }) {
    return {
        questions,
        users
    }
}


export default connect(mapStateToProps)(Question);