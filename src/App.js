import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importing Views
import HomePage from './views/homepage/homepage.js';
import ImageUpload from './views/imageUpload/UploadImage.js';
import VideoUpload from './views/videoUpload/uploadVideo.js';
import VerifyPage from './views/verifyPage/verifyPage.js';
import Login from './views/login/login.js';

//importing Router package
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={HomePage} />
        <Route path="/verify" component={VerifyPage} />
        <Route path="/imageUpload" component={ImageUpload} />
        <Route path="/videoUpload" component={VideoUpload} />
      </div>
      </Router>
    );
  }
}

export default App;
