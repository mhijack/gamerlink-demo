import React from 'react';
import Form from './Form';

const Modal = props => {
    if (props.showModal) {
        return (
            <div
                style={{
                    position: 'relative',
                    top: '0',
                    left: '0'
                }}
            >
                <div className="modal" onClick={props.closeModal} />
                <Form />
            </div>
        );
    } else {
        return null;
    }
};

export default Modal;
