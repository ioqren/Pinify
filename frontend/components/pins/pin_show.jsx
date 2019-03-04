import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link, Redirect } from 'react-router-dom';

class PinShow extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.pinId);
        
    }

    constructor(props) {
        super(props);
        this.state = {deleted: false}
    }

    render() {
        let photo = (this.props.pin) ? ( <img src={this.props.pin.photoUrl} /> ) : null;
        let redirect = (this.state.deleted) ? (<Redirect to="/" /> ): null;
        return (
            <div className="pinShowPage">
                <GreetingContainer />
                <div className="pinShowPhoto">
                {photo}
                </div>
                <Link to={`/pin/${this.props.pinId}/edit`}>
                <div class="buttonsContainer"><button>Edit</button></div>
                </Link>
                <Link to="/pin/new"><div className="addPinBtnContainer"><button className="addPinBtn"><span>+</span></button></div></Link>
                {redirect}
            </div>
        )
    }
}

export default PinShow;