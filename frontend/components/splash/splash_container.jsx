import Splash from './splash';
import { connect } from 'react-redux';
import { fetchPinsNoReplace, fetchBoards, createPinsBoard, clearPins, fetchPin } from '../../actions/board_pin_actions';
import { clearUsers } from '../../actions/session_actions';

const msp = state => {
	return {
		userId: state.session.id,
		username: state.session.username,
		pins: Object.values(state.entities.pins),
		boards: Object.values(state.entities.boards),
	};
};

const mdp = dispatch => {
	return {
		fetchPins: id => dispatch(fetchPinsNoReplace(id)),
		fetchBoards: userId => dispatch(fetchBoards(userId)),
		createPinsBoard: pb => dispatch(createPinsBoard(pb)),
		clearPins: () => dispatch(clearPins()),
		clearUsers: () => dispatch(clearUsers()),
fetchPin: (pinId) => dispatch(fetchPin(pinId))
	};
};

const splash = connect(
	msp,
	mdp
)(Splash);
export default splash;
