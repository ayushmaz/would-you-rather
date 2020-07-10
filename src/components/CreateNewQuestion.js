import React, { Component } from 'react';
import { handleAddQuestion } from '../actions/questions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateNewQuestion extends Component {
    state = {
        option1Text: '',
        option2Text: '',
        toHome : false
    }

    onChangeHandler = (e) => {
        (e.target.id === "option1Text") ? this.setState({ option1Text: e.target.value })
            : this.setState({ option2Text: e.target.value })
    }

    onSubmitHandler = (e) =>{
        const {option1Text , option2Text} = this.state
        this.props.dispatch(handleAddQuestion(option1Text , option2Text))
        this.setState({toHome : true})
        e.preventDefault()
    }
    
    render() {

        if(this.state.toHome === true){
            return <Redirect to='/'/>
        }
        const { option1Text, option2Text } = this.state
        return (
            <div className="container" style={{marginLeft: 120}}>
                <div className="card " style={{ margin: '10% 15% 0% 15%' }}>
                    <div className="card-header text-center">
                        <h3>Create New Question</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Complete the question:</p>
                        <h4 className="card-text">Would You Rather ... </h4>
                        <form style={{ padding: '20px' }} onSubmit={this.onSubmitHandler}>
                            <input id="option1Text" className='form-control' onChange={this.onChangeHandler} style={{ margin: '10px 0 10px 0' }} placeholder="Option 1"></input>
                            <h4 className="text-center">------OR------</h4>
                            <input id="option2Text" className='form-control' onChange={this.onChangeHandler} style={{ margin: '10px 0 30px 0' }} placeholder="Option 2"></input>
                            <button type="submit" disabled={option1Text.trim() === '' || option2Text.trim === ''} className='form-control btn btn-success'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect()(CreateNewQuestion);