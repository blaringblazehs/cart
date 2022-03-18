import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as firebase from "firebase";
// import "firebase/firestore";
// import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCq8HgjnSVacGdrV57Qy6FlJ3yf1V940kI",
    authDomain: "cart-543c8.firebaseapp.com",
    projectId: "cart-543c8",
    storageBucket: "cart-543c8.appspot.com",
    messagingSenderId: "148485713199",
    appId: "1:148485713199:web:77afc51d78ab3dd7d5c5da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
