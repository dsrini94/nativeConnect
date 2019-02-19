import React, { Component } from 'react';

import AdminAppbar from './../../components/adminAppbar/adminAppbar.js'
import  AdminImagevalidate from './../../components/reviewerImageValidate/reviewerimage.js'

import { Image } from 'semantic-ui-react'


export default class AdminImage extends Component {
  render(){
    return(
      <div>
        <AdminAppbar />
        <AdminImagevalidate />
      </div>
    );
  }
}
