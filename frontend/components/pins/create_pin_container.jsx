import React from 'react';
import { connect } from 'react-redux';
import PinForm from './pin_form';
import { createPin, fetchBoards } from '../../actions/board_pin_actions';

const msp = state => {
    let userId = Object.values(state.entities.users)[0].id;
    
    return {
        pin: {title: "", link_url: "", author_id: userId, board_id: 1, photoFile: null, photoUrl: null, 
            imageUrl: null, imageFile: null, showBoardList: false},
        formType: 'Create Pin',
        boards: Object.values(state.entities.boards),
        userId
    }
}

const mdp = dispatch => {
    return {
        action: pin => dispatch(createPin(pin)),
        fetchBoards: userId => dispatch(fetchBoards(userId))
    }
}

const CreatePinContainer = connect(msp, mdp)(PinForm);
export default CreatePinContainer;