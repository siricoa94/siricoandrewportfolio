import React, {Component} from 'react';
import firebaseInit from './config';
import '../css/login.css';

class Login extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    };

    signUp = e => {
        e.preventDefault();
        firebaseInit.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {console.log("this is ur uid: "  + firebaseInit.auth().currentUser.uid);}).then((u) => {console.log(u)}).catch((error) => {console.log(error);});
    }

    login = e => {
        e.preventDefault();
        firebaseInit.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{console.log("this is ur uid: "  + firebaseInit.auth().currentUser.uid);}).catch((error) => {console.log(error);});
    };
    logOut = e => {
        e.preventDefault();
        firebaseInit.auth().signOut();
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render () {
        return (
            <div className="loginContainer">
                <div className="formContainer">
                    <form>
                            <div className="loginForm">
                            <h1>User Authentication</h1>
                                <fieldset className="emailDiv">
                                    <legend>Email</legend>
                                    <input onChange={this.onChange} value={this.state.email} type="email" name="email" placeholder="Enter A Valid Email" className="emailEntry"></input>
                                </fieldset>
                                <fieldset className="passwordDiv">
                                    <legend>Password</legend>
                                    <input onChange={this.onChange} value={this.state.paddword} type="password" name="password" placeholder="Select A Password" className="passwordEntry"></input>
                                    <button onClick={this.signUp} className="enterButton">Sign Up</button>
                                    <button onClick={this.login} className="enterButton">Log In</button>
                                </fieldset>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;