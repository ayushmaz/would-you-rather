import React, { Component } from 'react';
import { findByLabelText } from '@testing-library/react';
import { connect } from 'react-redux';

class AnsweredQuestion extends Component {
    render() {
        const { users, authedUser, questions, userAvatar, author, id } = this.props
        const option1 = questions[id].optionOne.votes.length
        const option2 = questions[id].optionTwo.votes.length
        const totalVotes = option1 + option2
        const vote1 = (option1 / totalVotes).toFixed(2) * 100
        const vote2 = (option2 / totalVotes).toFixed(2) * 100
        const answer = users[authedUser].answers[id]
        console.log(answer)
        return (
            <div>
                <div className="container"
                    style={{
                        marginTop: '10%'
                    }}
                >

                    <div className="card testimonial-card w-50 mx-auto">
                        <div className="card-header bg-warning">
                            <h5>{author} Asks</h5>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="avatar white">
                                    <img src={userAvatar} className="rounded-circle"
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
                                            <div className="progress">
                                                <div className="progress-bar bg-success" style={{ width: `${vote1}%` }}>{vote1}%</div>
                                            </div>
                                            <p className="card-text text-center">{option1} out of {totalVotes}</p>
                                            {answer === "optionOne" && <div className="text-center">
                                                <button className="btn btn-info btn-sm" readOnly>Your Choice</button>
                                            </div>}
                                        </div>
                                    </div>
                                    <div className="card border-success">
                                        <div className="card-body">
                                            <h5 className="card-title">Would you</h5>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" style={{ width: `${vote2}%` }}>{vote2}%</div>
                                            </div>
                                            <p className="card-text text-center">{option2} out of {totalVotes}</p>
                                            {answer === "optionTwo" && <div className="text-center">
                                                <button className="btn btn-info btn-sm" readOnly>Your Choice</button>
                                            </div>}
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


function mapStateToProps({ users, authedUser, questions }, { author, id, userAvatar }) {
    return {
        users,
        questions,
        author,
        userAvatar,
        authedUser, id
    }
}

export default connect(mapStateToProps)(AnsweredQuestion);