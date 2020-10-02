import React, { Component } from 'react';
import firebaseInit from './config';
import Home from '../components/Home';
import Login from './login';

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {

            },
        };
    };

    componentDidMount(){
        this.authListener();
    };
    authListener(){
        firebaseInit.auth().onAuthStateChanged((user) => {
            console.log(user);
            // console.log(user.uid);
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    };
    render() {
        return(
            <div className="firebaseLogin">
               {this.state.user ? (<Home />) : (<Login />)}
            </div>
        );
    };
};

export default Auth;