import React, { Component } from 'react';

import Appbar from './../../components/appbar/appbar.js'
import PoliticsCover from './../../components/politicsCover/politicsCover.js'
import PoliticsTiles from './../../components/politicsTiles/politicsTiles.js'

import { Image } from 'semantic-ui-react'


export default class DebatePolitics extends Component {
  render(){
    return(
      <div>
        <Appbar />
        <PoliticsCover />
        <PoliticsTiles />
      </div>
    );
  }
}
