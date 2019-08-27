import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import './Dashboard.css'

class Dashboard extends Component {
    render(){
        return(
           <Grid>
               <Col>
                    <Row>
                        <nav className="menu-fix">
                            <h1>Profile</h1>
                            <div className="links-name">
                                <a href="#">Home</a>
                                <a href="#">Data</a>
                                <a href="#">Validation data</a>
                                <a href="#">Files</a>
                            </div>
                        </nav>
                        <div className="card-dashboard">
                            <p>Aqui vai um dado validado</p>
                        </div>
                    </Row>
               </Col>
           </Grid>
        )
    }
}
export default Dashboard;

