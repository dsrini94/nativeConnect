import React, { Component } from 'react';

//importing semantic-ui elements
import { Grid } from 'semantic-ui-react'

import Appbar from './../../components/appbar/appbar.js';
import ReviewerVideoTiles from './../../components/ReviewerVideoTiles/reviewerVideoTiles.js'

export default class ReviewerVideos extends Component {
  render(){
    return(
      <div>
        <Appbar />
        <Grid padded divided>
          <Grid.Row>
            <Grid.Column width={16}>
              <ReviewerVideoTiles />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
