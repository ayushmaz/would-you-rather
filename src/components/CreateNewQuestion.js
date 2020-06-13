import React, { Component } from 'react';

class CreateNewQuestion extends Component {
    render() {
        return (
            <div className="container">
                <div className="card " style ={{margin : '10% 15% 0% 15%'  }}>
                    <div className="card-header text-center">
                        <h3>Create New Question</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Complete the question:</p>
                        <h4 className="card-text">Would You Rather ... </h4>
                        <form style={{padding : '20px'}}>
                            <input className='form-control' style={{margin:'10px 0 10px 0'}} placeholder="Option 1"></input>
                            <h4 className="text-center">-----OR-----</h4>
                            <input className='form-control' style={{margin:'10px 0 30px 0'}} placeholder="Option 2"></input>
                            <button className = 'form-control btn btn-success'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateNewQuestion;