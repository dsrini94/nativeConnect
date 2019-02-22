import React, { Component } from 'react';

import AdminAppbar from './../../components/adminAppbar/adminAppbar.js'
import AdminVerify from './../../components/reviewerVerify/reviewerVerify.js'


export default class AdminHome extends Component {
  render(){
    return(
      <div>
        <AdminAppbar />
        <AdminVerify />
      </div>
    );
  }
}
