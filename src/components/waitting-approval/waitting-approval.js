import React, {Component} from 'react';
import ReactLoading from "react-loading";

class WaittingApprovalComponent extends Component {

    render() {
        return (
            <div>
                <ReactLoading type="bars" color="rgb(240, 173, 78)" height={50} width={50} className={'no-margin'}/>
                <p> Waitting your approval in <strong>Hollon</strong> extension </p>
            </div>
        );
    }
}
export default WaittingApprovalComponent;
