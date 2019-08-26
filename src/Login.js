import React, { Component } from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import './Login.css';

class Login extends Component {

    render(){
        return(
            <Grid>
                <Row>
                    <Col>
                        <div className="card">
                            <h1>Sign in</h1>
                            <main id="container">
                                <form className="input">
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Username"/>
                                    <input type="password" class="form-control" id="exampleInputEmail1" placeholder="Password"/>
                                    <Button bsStyle="warning">Login</Button>
                                    Do you not have user at the Holon?<a href="#"> Do your login here</a>
                                </form>
                            </main>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
export default Login;