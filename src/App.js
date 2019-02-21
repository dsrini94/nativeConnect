import React, { Component } from 'react';
import './App.css';

//importing Views
import HomePage from './views/homepage/homepage.js';
import ImageUpload from './views/imageUpload/UploadImage.js';
import VideoUpload from './views/videoUpload/uploadVideo.js';
import VerifyPage from './views/verifyPage/verifyPage.js';
import Login from './views/login/login.js';
import DebatesPage from './views/debatesPage/debatesPage.js';
import DebatePolitics from './views/debatePolitics/debatePolitics.js';
import Discussion from './views/discussion/discussion.js';
import Redeem from './views/redeem/redeem.js';


import AdminHome from './views/adminHome/adminHome.js'
import AdminVideo from './views/adminVideo/adminvideo.js'
import AdminImage from './views/adminImage/adminimage.js'



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
        <Route path="/debates" component={DebatesPage} />
        <Route path="/politics" component={DebatePolitics} />
        <Route path="/discussion" component={Discussion} />
        <Route path="/redeem" component={Redeem} />
        <Route path="/adminVerify" component={AdminHome} />
        <Route path="/adminVideo" component={AdminVideo} />
        <Route path="/adminImage" component={AdminImage} />
      </div>
      </Router>
    );
  }
}

export default App;
