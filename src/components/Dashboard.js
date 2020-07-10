import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardViewQuestion from './CardViewQuestion';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import { CssBaseline } from '@material-ui/core';




const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),        
    },
    
    toolbar: theme.mixins.toolbar,

    

});


class Dashboard extends Component {

    state = {
        answeredQuestionsTab: false,
        value: 0
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

    handleChange = (e,newValue) =>{
        this.setState({value : newValue})
    }
    render() {
        const { classes } = this.props;
        const { answeredQuestions, unansweredQuestions } = this.props
        return (

            <div className='container' style ={{marginLeft : 120}}>
                <div className={classes.toolbar}></div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
                    <ul className="nav">
                        <li className="nav-item" style={{ padding: '5px' }}>
                            <button className={`btn btn-outline-info nav-link ${this.state.answeredQuestionsTab === true && "active"}`}
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
                            : <CardViewQuestion questionID={unansweredQuestions} />}
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


export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Dashboard));