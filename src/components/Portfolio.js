import React, {Component} from 'react';
import firebaseInit from '../authentication/config';
import Nav from './Nav';
import '../css/portfolio.css';
import {AppList} from '../data/portfolio';

class Portfolio extends Component {
  logOut = e => {
    e.preventDefault();
    firebaseInit.auth().signOut();
  };
  render() {
    let Applications = AppList.map((app) => {
      return (
          <div className="appListMapImgContainer">
            {app.title}
            <img src={app.image} className="img" id={app.id}></img>
          </div>
      );
    });
    let ApplicationDescription = AppList.map((app) => {
      return (
        <div id={app.id +"container"} className="backgroundImageContent">
          <div>
            <p>{app.description}</p>
            <a href={app.link}>Click Me To Play</a>
          </div>
        </div>
      );
    });
      return(
        <div>
          <Nav></Nav>
          <div className="portfolioMainContainer">
              <div className="portfolioImageContainer">
                {Applications}
              </div>
              <div className="portfolioContentContainer">
                {ApplicationDescription}
              </div>
          </div>
        </div>
      );
  };
};

export default Portfolio;