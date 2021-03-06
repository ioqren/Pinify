import React from 'react';
import GreetingContainer from '../header/greeting_container';
import { Link } from 'react-router-dom';

class BoardShow extends React.Component {
	componentDidMount() {
		this.props.fetchPins(this.props.boardId);
	}

	render() {
		let list = (
			<div className="grid">
				{this.props.pins.map(pin => {
					let title = pin.title ? pin.title : null;
					return (
						<Link to={`/pin/${pin.id}`}>
							<div className="pinWrapper" key={pin.id}>
								<img src={pin.photoUrl} className="pinImg" />
								<div className="pinText" />
								<div className="pinTitle">
									<span>{title}</span>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		);

		return (
			<div>
				<GreetingContainer />
				{list}

				<Link to="/pin/new">
					<div className="addPinBtnContainer">
						<button className="addPinBtn">
							<span>+</span>
						</button>
					</div>
				</Link>
			</div>
		);
	}
}

export default BoardShow;
