import React, {Component} from 'react';
import firebaseInit from '../authentication/config';
import '../css/nav.css';

class Nav extends Component {
  logOut = e => {
    e.preventDefault();
    firebaseInit.auth().signOut();
  };
  render(){
    const sections =['Portfolio','Contact'];
    const navLinks = sections.map(section =>{
      return (
        <button className="navButton"><a href={'/' + section} className="navLink">{section}</a></button>
      )
    });
    return (
      <nav>
        <h2>{this.props.title}</h2>
        <ul>
        <button className="navButton"><a href="/" className="navLink">Home</a></button>
          {navLinks}
          <button onClick={this.logOut} className="enterButton" id="navLogOut"><a href="/" className="navLink">Log Out</a></button>
        </ul>
      </nav>
    );
    }
};

export default Nav;