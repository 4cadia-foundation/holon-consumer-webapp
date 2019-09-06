import React, {Component} from 'react';
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import IntegrationService from '../../services/integration/integration.service';
import {toast} from 'react-toastify';

import './Login.css'

export default class Login extends Component {

    constructor(props) {
        super (props);

        this.state = {
            isLoading: false,
            address: (this.props.location.state && this.props.location.state.address) ? this.props.location.state.address : ''
        };

        this._service = new IntegrationService();
    }


    handleChange ( event ) {
        this.setState({
            address: event.currentTarget.value
        });
     }

     signUp (){
         this.props.history.push('/signup');
     }

     async onLogin () {
        try {
            const address = this.state.address;
            const authorization = await this._service.authorization( address );

            if (!authorization[0])
                throw new Error('Access not authorized in blockchain');

            this.props.history.push({
                pathname: '/dashboard',
                state: { status: true , email: authorization[1] }
            });

        } catch (error) {
            toast.error(error.message);
        }


     }

    render ( ) {

        const isLoading = this.state.isLoading;

        return (
            <div>
                <h2> { 'Login' } </h2>
                <hr />
                <form className={ `formLogin` }>
                        <FormGroup controlId="formBasicText">
                            <ControlLabel>Inform address</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.address}
                                placeholder="0xbC03CA3446F4910f4b9C9D1b9FB3F421b21d553D"
                                onChange={this.handleChange.bind(this)} />
                        </FormGroup>

                        <Button bsStyle="success"
                                bsSize="large"
                                onClick={this.onLogin.bind(this)}
                                disabled={isLoading}>
                            {isLoading ? 'Loading…' : 'Login with Hollon'}
                        </Button>
                </form>

                <p> <strong>Don't have an account? </strong> </p>
                <Button onClick={ this.signUp.bind(this) }>Signup for Blockchain Company</Button>
            </div>
        );
    }
}
