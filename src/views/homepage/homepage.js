import React, { Component } from 'react';

import Appbar from './../../components/appbar/appbar.js'
import NewsFeed from './../../components/newsFeed/newsFeed.js'


export default class HomePage extends Component {
  render(){
    return(
      <div>
        <Appbar />
        <NewsFeed />
      </div>
    );
  }
}
