import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import IntegrationService from '../../services/integration/integration.service';
import {toast} from 'react-toastify';
import './Signup.css';

class Signup extends Component{


    constructor (props) {
        super( props );
        this.state = {
            isLoading: false,
            address: "",
            waittingApproval: false
        };

        this._service = new IntegrationService();
    }

    loading ( status ) {
        this.setState({
            isLoading: status
        });
    }

    signUp () {
        this.loading(true);
        const { address } = this.state;
        return  this._service.integrateWithHollon( address )
            .then( user => {
                toast.success('We are waiting for your permission to access your data');

                this.props.history.push({
                    pathname: '/permission',
                    state: { address: address }
                });
                
            })
            .catch(( exception ) =>  toast.error(exception.message))
            .finally(() => this.loading(false));
    }


   


    handleChange ( event ) {
       this.setState({
           address: event.currentTarget.value
       });
    }


    render () {

        const isLoading = this.state.isLoading;

        return (
            <div>
                <h1> { 'Sign Up' } </h1>
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
                            onClick={this.signUp.bind(this)}
                            disabled={isLoading}>
                        {isLoading ? 'Loading…' : 'Autorize'}
                    </Button>
                </form>
                <p>Authorize blockchain company to obtain your information to access the platform</p>
            </div>
        );
    }


}

export default withRouter( Signup );
