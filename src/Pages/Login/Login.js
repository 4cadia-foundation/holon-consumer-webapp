import React, {Component} from 'react';
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import IntegrationService from '../../Services/Integration/integration.service';
import {toast} from 'react-toastify';
import './Login.css';

class Login extends Component{


    constructor (props) {
        super(props);
        this.service = new IntegrationService();
        this.state = {
            isLoading: false,
            address: "",
        };
    }

    loading (status) {
        this.setState({
            isLoading: status
        });
    }

    signUp () {
        this.loading(true);
        const { address } = this.state;
        return this.service.integrateWithHollon(address)
            .then( user => {
                toast.success('We are waiting for your permission to access your data');
            })
            .catch(( exception ) =>  toast.error(exception.message))
            .finally(() => this.loading(false));
    }



    handleChange (event) {
       this.setState({
           address: event.currentTarget.value
       });
    }


    render () {

        const isLoading = this.state.isLoading;
        const transactionHash = this.state.transactionHash;

        return (
            <div className="centralized-content">
                <div className="card">
                    <h1>Sign Up</h1>
                    <hr />

                    <div>
                        <form className={ `formLogin` }>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>Inform address</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.address}
                                    placeholder="0xbC03CA3446F4910f4b9C9D1b9FB3F421b21d553D"
                                    onChange={this.handleChange.bind(this)} />
                            </FormGroup>

                            <Button bsStyle="warning"
                                    bsSize="large"
                                    onClick={this.signUp.bind(this)}
                                    disabled={isLoading}>
                                {isLoading ? 'Loading…' : 'Login with Hollon'}
                            </Button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }


}

export default Login;
