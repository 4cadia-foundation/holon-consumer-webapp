import React, {Component} from 'react';
import avatar from './avatar.png';
import locked from './locked.png';
import {Button} from "react-bootstrap";


class Dashboard extends Component {


    render(){
        const { status, email } = this.props.location.state;

        return(
            <div className="centralized-content">
                <div className="card">
                    <h1>Shared Data</h1>
                    <hr />
                    <div>
                        <img src={ status ? avatar : locked } alt={ email } className={'img-avatar'}/>
                        {
                            status ? (
                                <div className={'info'}>
                                    <strong>{ email }</strong>
                                    <p> {'Thanks for sharing your email.'}</p>
                                </div>
                            ) : (
                                <div className={'info'}>
                                    <strong>{ 'Sorry' }</strong>
                                    <p> {"We didn't identify any approvals. Try again later."}</p>

                                    <Button bsSize="large"
                                            onClick={ () => { this.props.history.push('')}}>
                                        Back
                                    </Button>

                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;

