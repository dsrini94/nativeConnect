import React, { Component } from 'react';

//importing semantic-ui elements
import { Grid } from 'semantic-ui-react'

import Appbar from './../../components/appbar/appbar.js';
import ReviewerImageTiles from './../../components/ReviewerimageTiles/reviewerimagetiles.js'

export default class ReviewerImages extends Component {
  render(){
    return(
      <div>
        <Appbar />

        <Grid >
          <Grid.Row>
            <Grid.Column width={16}>
              <ImageTiles />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
