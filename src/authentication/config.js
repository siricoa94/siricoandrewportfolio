import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD0DLNSMcMweBE2P0okMVSjtCNzXfHjtXY",
    authDomain: "react-portfolio-caff0.firebaseapp.com",
    databaseURL: "https://react-portfolio-caff0.firebaseio.com",
    projectId: "react-portfolio-caff0",
    storageBucket: "react-portfolio-caff0.appspot.com",
    messagingSenderId: "783863450452",
    appId: "1:783863450452:web:40d1fc14e58756431556c1"
};

const firebaseInit = firebase.initializeApp(config);
export default firebaseInit;