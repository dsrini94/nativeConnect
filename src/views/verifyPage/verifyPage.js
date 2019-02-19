import React, { Component } from 'react';

import Appbar from './../../components/appbar/appbar.js';
import Verify from './../../components/verify/verify.js';

export default class NewsCard extends Component {
  render(){
    return(
      <div>
        <Appbar />
        <Verify />
    </div>
    );
  }
}
