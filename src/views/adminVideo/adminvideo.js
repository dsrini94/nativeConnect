import React, { Component } from 'react';

import AdminAppbar from './../../components/adminAppbar/adminAppbar.js'
import  AdminVideoValidate from './../../components/reviewerVideoValidate/reviewerVideo.js'

import { Image } from 'semantic-ui-react'


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
