import React, { Component } from 'react';

import AdminAppbar from './../../components/adminAppbar/adminAppbar.js'
import  AdminVideoValidate from './../../components/reviewerVideoValidate/reviewerVideo.js'

export default class AdminVideo extends Component {
  render(){
    return(
      <div>
        <AdminAppbar />
        <AdminVideoValidate />
      </div>
    );
  }
}
