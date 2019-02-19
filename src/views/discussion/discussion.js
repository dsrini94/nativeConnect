import React, { Component } from 'react';

import Appbar from './../../components/appbar/appbar.js'
import DiscussionBoard from './../../components/discussionBoard/discussionBoard.js'

import { Image } from 'semantic-ui-react';

export default class Discussion extends Component {
  render(){
    return(
      <div>
        <Appbar />
        <DiscussionBoard />
      </div>
    );
  }
}
