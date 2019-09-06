import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './Permission.css';

export default class Permission extends Component {

    render ( ){
        return (
            <div>
                <h2>Shared Data</h2>
                <hr />
                <div className={'permission'}>
                    <p>We send via blockchain a request to share your data with our application. To approve use the Hollon extension and go to the Notifications menu and approve the request.</p>
                    <p>After approve, go to Login e access application.</p>
                    <Button onClick={ ( ) => {
                        this.props.history.push({
                            pathname: '/login'
                        });
                    }}>Login</Button>

                </div>
            </div>
        );
    }
}
