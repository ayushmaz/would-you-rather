import React, { Component } from 'react';

class Page404 extends Component {
   

    onClicked= () => {
        this.props.history.push('/')
    }
    render() {
       
        return (
            
            <div className="container text-center">
                <h1 style={{ color: 'orange', marginTop: '30%', marginBottom: '20px' }}>Oops! Page Not Found</h1>
                <button 
                onClick = {this.onClicked}
                className="btn btn-info">Login</button>
            </div>
        );
    }
}

export default Page404;