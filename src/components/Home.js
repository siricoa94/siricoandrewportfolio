import React, {Component} from 'react';
import firebaseInit from '../authentication/config';
import Nav from './Nav';
import '../css/home.css';

class Home extends Component {
  logOut = e => {
    e.preventDefault();
    firebaseInit.auth().signOut();
  };
  constructor() {
    super()
    this.state = {
        showInfoProfileImage: false,
        showInfoHobbyImage: false,
        showInfoCareerImage: false,
        showInfoEducationImage: false
    }
  };
  handleClickProfileImage() {
    this.setState({
      showInfoProfileImage: !this.state.showInfoProfileImage,
      showInfoHobbyImage: false,
      showInfoCareerImage: false,
      showInfoEducationImage: false
    })
  };
  handleClickHobbyImage() {
    this.setState({
      showInfoHobbyImage: !this.state.showInfoHobbyImage,
      showInfoProfileImage: false,
      showInfoCareerImage: false,
      showInfoEducationImage: false
    })
  };
  handleClickCareerImage() {
    this.setState({
      showInfoCareerImage: !this.state.showInfoCareerImage,
      showInfoProfileImage: false,
      showInfoHobbyImage: false,
      showInfoEducationImage: false
    })
  };
  handleClickEducationImage() {
    this.setState({
      showInfoEducationImage: !this.state.showInfoEducationImage,
      showInfoProfileImage: false,
      showInfoCareerImage: false,
      showInfoHobbyImage: false
    })
  };
  render() {
    return(
      <div>
        <Nav></Nav>
        <div className="homeBackground">
        <div className="homeContainer">
          <div className="homeProfileContainer">
            <div className="homeProfileImage" onClick={()=>this.handleClickProfileImage()}></div>
            <div className="homeHobbyImage" onClick={()=>this.handleClickHobbyImage()}></div>
            <div className="homeCareerImage" onClick={()=>this.handleClickCareerImage()}></div>
            <div className="homeEducationImage" onClick={()=>this.handleClickEducationImage()}></div>
            
          </div>
          <div className="homeInfoContainer">
          <div className="imageDescription">
                  {
                    this.state.showInfoProfileImage? 
                    <div className="showInfoContainer">
                      <div className="showInfoTitle">
                          <h1>Welcome</h1>
                      </div>
                      <div className="showInfoDescriptionContainer">
                        <div className="showInfoDescription">
                          <p>
                              My name is Andrew Sirico and this is my portfolio of applications built using React.js and home made CSS.
                              <br /><br />
                              The purpose of this portfolio is to showcase my latest applications. You can find all my latest projects under the "Portfolio" tab at the top right in the navigation bar along with a "Home", "About", and "Contact" tab. Please do not hesitate to reach out to me, I always enjoy good conversation!
                          </p>
                        </div>
                      </div>
                    </div> : null
                  }
                  {
                    this.state.showInfoHobbyImage? 
                    <div className="showInfoContainer">
                      <div className="showInfoTitle">
                          <h1>Hobbies</h1>
                      </div>
                      <div className="showInfoDescriptionContainer">
                        <div className="showInfoDescription">
                          <p>
                              Some of the activities I do in my personal life are listed here if you are interested to know more about what I like to do outside of work.
                              <br /><br />
                              Some of my hobbies include playing guitar, designing web applications, and playing video games. I really enjoy playing guitar and have been playing since I was a teen with no formal training. Although designing web applications is a new hobby for me, it is one I spend the most time doing and enjoying the most. Video games I believe should be self explainatory, at least for myself, they are a way to relax in a momentary escape from the minutiae of daily life. Although I have many more hobbies, these are the ones I incorperate into my daily routine.
                          </p>
                        </div>
                      </div>
                    </div> : null
                  }
                  {
                    this.state.showInfoCareerImage? 
                    <div className="showInfoContainer">
                      <div className="showInfoTitle">
                          <h1>Career</h1>
                      </div>
                      <div className="showInfoDescriptionContainer">
                        <div className="showInfoDescription">
                          <p>
                              Some of the activities I do in my personal life are listed here if you are interested to know more about what I like to do outside of work.
                              <br /><br />
                              Some of my hobbies include playing guitar, designing web applications, and playing video games. I really enjoy playing guitar and have been playing since I was a teen with no formal training. Although designing web applications is a new hobby for me, it is one I spend the most time doing and enjoying the most. Video games I believe should be self explainatory, at least for myself, they are a way to relax in a momentary escape from the minutiae of daily life. Although I have many more hobbies, these are the ones I incorperate into my daily routine.
                          </p>
                        </div>
                      </div>
                    </div> : null
                  }
                  {
                    this.state.showInfoEducationImage? 
                    <div className="showInfoContainer">
                      <div className="showInfoTitle">
                          <h1>Education</h1>
                      </div>
                      <div className="showInfoDescriptionContainer">
                        <div className="showInfoDescription">
                          <p>
                              Some of the activities I do in my personal life are listed here if you are interested to know more about what I like to do outside of work.
                              <br /><br />
                              Some of my hobbies include playing guitar, designing web applications, and playing video games. I really enjoy playing guitar and have been playing since I was a teen with no formal training. Although designing web applications is a new hobby for me, it is one I spend the most time doing and enjoying the most. Video games I believe should be self explainatory, at least for myself, they are a way to relax in a momentary escape from the minutiae of daily life. Although I have many more hobbies, these are the ones I incorperate into my daily routine.
                          </p>
                        </div>
                      </div>
                    </div> : null
                  }
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
};

export default Home;