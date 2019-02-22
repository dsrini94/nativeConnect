import React, { Component } from 'react';

import Appbar from './../../components/appbar/appbar.js'
import Chips from './../../components/chips/chips.js'
import DebateHomeTile from './../../components/debateHomeTiles/debateHomeTiles.js'


export default class DebatesPage extends Component {
  render(){
    return(
      <div>
        <Appbar />
        <Chips />
        <DebateHomeTile />
      </div>
    );
  }
}
