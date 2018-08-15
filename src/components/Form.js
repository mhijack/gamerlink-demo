import React from 'react';

const Form = props => (
    <div className="form-div">
        <form className="form" onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    type="text"
                    autoComplete="off"
                    placeholder="username"
                    autoFocus="on"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input name="email" type="text" placeholder="email" autoComplete="off" />
            </div>

            <div className="form-group">
                <button className="form-button button">Register</button>
            </div>
        </form>
    </div>
);

export default Form;
