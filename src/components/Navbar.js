import React, { Component } from 'react';
import Form from './Form';
import Modal from './Modal';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        }
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = event => {
        event.stopPropagation();
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <a href="#">
                        <img
                            className="logo"
                            src="/img/GL_logo.png"
                            alt="logo"
                        />
                    </a>
                    <button onClick={this.openModal} className="button">Claim your account</button>
                </div>
                <Modal showModal={this.state.showModal} closeModal={this.closeModal} />
            </div>
        );
    }
}

export default Navbar;
