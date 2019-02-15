import React, { Component } from 'react';

//importing semantic-ui elements
import { Grid } from 'semantic-ui-react'

import Appbar from './../../components/appbar/appbar.js';
import VideoUploader from './../../components/videoUploader/videoUplaoder.js'
import VideoTiles from './../../components/videoTiles/videoTiles.js'

export default class VideoUpload extends Component {
  render(){
    return(
      <div>
        <Appbar />

        <Grid padded divided>
          <Grid.Row>
            <Grid.Column width={8}>
              <VideoUploader />
            </Grid.Column>
            <Grid.Column width={8}>
              <VideoTiles />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
