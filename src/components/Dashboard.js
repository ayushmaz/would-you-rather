import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardViewQuestion from './CardViewQuestion';



class Dashboard extends Component {

    state = {
        answeredQuestionsTab: false,
    }

    handleClick = (e) => {
        const id = e.target.id

        if (id === 'ans' && this.state.answeredQuestionsTab === false) {
            this.setState({ answeredQuestionsTab: true })
        }
        if (id === "unans" && this.state.answeredQuestionsTab === true) {

            this.setState({ answeredQuestionsTab: false })
        }
    }
    render() {
        const { answeredQuestions, unansweredQuestions } = this.props
        return (

            <div className='container'>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
                    <ul className="nav">
                        <li className="nav-item" style={{ padding: '5px' }}>
                            <button className = {`btn btn-outline-info nav-link ${this.state.answeredQuestionsTab === true && "active"}`}
                             id="ans" onClick={(e) => this.handleClick(e)} >Answered Question</button>
                        </li>
                        <li className="nav-item" style={{ padding: '5px' }}>
                            <button className={`btn btn-outline-info nav-link ${this.state.answeredQuestionsTab === false && "active"}`} 
                            id="unans" onClick={(e) => this.handleClick(e)}>Unanswered Question</button>
                        </li>
                    </ul>
                </div>
                <div >
                    <ul>
                        {this.state.answeredQuestionsTab === true ? <CardViewQuestion questionID={answeredQuestions} />
                            : <CardViewQuestion  questionID={unansweredQuestions} />}
                    </ul>
                </div>

            </div>


        );

    }
}

function mapStateToProps({ authedUser, questions, users }) {

    const user = users[authedUser];
    const answeredQuestions = Object.keys(user.answers)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const unansweredQuestions = Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    return {
        unansweredQuestions,
        answeredQuestions
    }
}


export default connect(mapStateToProps)(Dashboard);