import React, { Component } from 'react';

//importing semantic-ui elements
import { Grid } from 'semantic-ui-react'

import Appbar from './../../components/appbar/appbar.js';
import ImageUploader from './../../components/imageUploader/imageUploader.js'
import ImageTiles from './../../components/imageTiles/imageTiles.js'

export default class ImageUpload extends Component {
  render(){
    return(
      <div>
        <Appbar />

        <Grid padded divided>
          <Grid.Row>
            <Grid.Column width={8}>
              <ImageUploader />
            </Grid.Column>
            <Grid.Column width={8}>
              <ImageTiles />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
