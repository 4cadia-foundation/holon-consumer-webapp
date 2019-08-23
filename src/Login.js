import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import './Login.css';

class Login extends Component {

    render(){
        return(
            <Grid>
                <Row>
                    <Col>
                    <form action="action_page.php">
                
                        <div className="container">
                            <label for="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required/>

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required/>

                            <button type="submit">Login</button>
                            <label>
                            <input type="checkbox" checked="checked" name="remember"/> Remember me
                            </label>
                        </div>

                        <div className="container" >
                            <button type="button" className="cancelbtn">Cancel</button>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div>
                        </form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
export default Login;