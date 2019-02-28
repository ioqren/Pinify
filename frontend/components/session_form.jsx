import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            first_name: "",
            last_name: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.switchFormType = this.switchFormType.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    updateUsername(e) {
        this.setState({ username: e.target.value })
    }

    updatePassword(e) {
        this.setState({ password: e.target.value })
    }

    demoLogin() {
        this.setState({username: 'mittens', password: '123456'});  
    }

    switchFormType() {
        if (this.props.path === '/login') {
            return (
                <Link to="/signup"><button>Sign Up</button ></Link >
            )
        } else {
            return (
                <Link to="/login"> <button>Log In</button></Link >
            )
        }
    }

    render() {
        let demo;
        if (this.props.formType === "Log in") {
            demo = (<button onClick={this.demoLogin.bind(this)} type="submit">Demo</button>)
        }

        let switchForm = this.switchFormType();
        return (
            <div className="containerContainer">
                <div className="formContainer">
                    <div className="headingsContainer">
                        <i className="fab fa-pinterest logo fa-3x"></i>
                        <h1>{this.props.formType} to see more</h1>
                        <h2>Access Pinterest's best ideas with a free account</h2>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            value={this.state.username} 
                            type="text" 
                            onChange={this.updateUsername.bind(this)}
                            placeholder="Email"
                        />
                        <input 
                            value={this.state.password} 
                            type="password" 
                            onChange={this.updatePassword.bind(this)}
                            placeholder="Password"
                        />
                        <div className="buttonsContainer">
                            <button type="submit">{this.props.formType}</button>
                            {demo}
                            {switchForm}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;