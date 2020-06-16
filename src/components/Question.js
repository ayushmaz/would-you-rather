import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnsweredQuestion from './AnsweredQuestion';
import { handleAddAnswer } from '../actions/questions';

class Question extends Component {

    state = {
        selectedOption : ''
    }
    onRadioSelected = (e) =>{
        this.setState({selectedOption : e.target.value})
    }

    onSubmitHandler = (e) =>{
        e.preventDefault()
        this.props.dispatch(handleAddAnswer(this.props.match.params.id , this.state.selectedOption))
    }

    render() {
        const { id } = this.props.match.params
        const { questions,users,answer } = this.props
        const question = questions[id]
        const userAvatar = users[question.author].avatarURL 
        const isAnswered = answer.hasOwnProperty(id)
        
        return (
            isAnswered? <AnsweredQuestion id = {id} author = {question.author} userAvatar={userAvatar} />
            :<div className="container"
                style={{
                    marginTop: '10%'
                }}
            >

                <div className="card testimonial-card w-50 mx-auto">
                    <div className="card-header text-center bg-warning">
                        <h5>{users[question.author].name} Asks</h5>
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
                                <form onSubmit = {this.onSubmitHandler}>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange ={this.onRadioSelected} name="radioOption" type="radio" id="option1" value="optionOne" />
                                        <label className="form-check-label" htmlFor="option1" >
                                            {question.optionOne.text}
                                        </label>
                                    </div>
                                    <div className="form-check" style={{ marginTop: '10px', marginBottom: '10px' }}>
                                        <input className="form-check-input" onChange ={this.onRadioSelected} name="radioOption" type="radio"  id="option2" value="optionTwo" />
                                        <label className="form-check-label" htmlFor="option2" >
                                            {question.optionTwo.text}
                                        </label>
                                    </div>
                                    <input type="submit" disabled = {this.state.selectedOption.trim() === '' } className="btn btn-success w-100"></input>
                                </form>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        );
    }
}


function mapStateToProps({ questions,users, authedUser }) {
    const answer = users[authedUser].answers
    return {
        questions,
        users,
        answer
    }
}


export default connect(mapStateToProps)(Question);