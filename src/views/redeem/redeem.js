import React, { Component } from 'react';

import Appbar from './../../components/appbar/appbar.js'
import Credits from './../../components/credits/credits.js'

export default class Redeem extends Component {
  render(){
    return(
      <div>
        <Appbar />
        <Credits />
      </div>
    );
  }
}
