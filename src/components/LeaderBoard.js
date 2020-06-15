import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderBoard extends Component {
    render() {
        const {users, leaderBoardUsers } = this.props
        console.log(leaderBoardUsers)
        return (

            leaderBoardUsers.map((user) => {
                return <div className="container">
                    <div className="card testimonial-card w-50 mx-auto" style={{ marginTop: '10px', marginBottom: '5px' }}>
                        <div className="row">
                            <div className="col-3">
                                <div className="avatar white">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-circle"
                                        alt="avatar1"
                                        style={{
                                            padding: '10px',
                                            height: '150px',
                                            width: '150px',
                                            alignSelf: 'center'
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="col-6" >
                                <div className="card-body bg-light" >

                                    <h3 className="card-title" >{users[user.id].name}</h3>
                                    <div className="row" style={{ fontFamily: 'Roboto', fontWeight: '600' }}>

                                        <div className="col-9" >Answered Question</div>
                                        <div className="col-3" >{Object.keys(users[user.id].answers).length}</div>
                                    </div>
                                    <hr />
                                    <div className="row" style={{ fontFamily: 'Roboto', fontWeight: '600' }}>

                                        <div className="col-9" >Created Question</div>
                                    <div className="col-3" >{users[user.id].questions.length}</div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className="card">
                                    <div className="card-header text-center">
                                        Score
                                </div>
                                    <div className="card-body ">
                                        <div className="bg-success" style={{
                                            height: '75px',
                                            width: '75px',
                                            backgroundColor: '#bbb',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'

                                        }}><div className="text-center" style={{ fontWeight: '600', fontSize: '1.5rem' }}>{user.point}</div></div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            })

        );
    }
}
function mapStateToProps({ users }) {
    const userID = Object.keys(users)
    const userScore = userID.map(id => ({
        id: id,
        point: Object.keys(users[id].questions).length + Object.keys(users[id].answers).length
    }))
    return {
        users,
        leaderBoardUsers: userScore.sort((a, b) => b.point - a.point)
    }
}
export default connect(mapStateToProps)(LeaderBoard);