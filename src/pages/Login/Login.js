import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import IntegrationService from '../../services/integration/integration.service';
import {toast} from 'react-toastify';
import './Login.css';

class Login extends Component{


    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
            address: "",
            waittingApproval: false
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
        return IntegrationService.integrateWithHollon(address)
            .then( user => {
                this.setState({ waittingApproval: true });
                toast.success('We are waiting for your permission to access your data');
            })
            .then( ( data ) => {
                console.log( data );
            })
            .catch(( exception ) =>  toast.error(exception.message))
            .finally(() => this.loading(false));
    }


    validateAuthorization ( ) {
        const { address } = this.state;
        IntegrationService.authorization(address)
          .then((authorization) => {
              this.props.history.push({
                  pathname: '/dashboard',
                  state: { status: false ,email: authorization[1]}
              });

          });
    }


    handleChange (event) {
       this.setState({
           address: event.currentTarget.value
       });
    }


    render () {

        const isLoading = this.state.isLoading;
        const waittingApproval = this.state.waittingApproval;

        return (
            <div className="centralized-content">
                <div className="card">
                    <h1> { waittingApproval ? 'Approval' : 'Sign Up' } </h1>
                    <hr />
                    <div>
                        {
                            waittingApproval ?
                            (
                                <div className={'box-waitting-approval'}>
                                    <p> Make the approval using the Hollon extension, and click the button below. </p>
                                    <Button bsStyle="warning" bsSize="large" onClick={ this.validateAuthorization.bind(this) }>Access</Button>
                                </div>
                            ) : (
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
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }


}

export default withRouter( Login );
