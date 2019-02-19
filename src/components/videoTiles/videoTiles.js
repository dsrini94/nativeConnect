import React, { Component } from 'react';

import { Grid, Embed } from 'semantic-ui-react'


export default class VideoTiles extends Component {
  render(){
    return(
      <div>
        <h1 className="uploadImageTitle">Previously Uploaded Videos</h1>
        <br />

        <Grid >
          <Grid.Row>
            {
              this.props.videoArray.map( item => (
                <Grid.Column width={8} style={{marginTop:'20px'}}>
                  <Embed id={item.video} placeholder={item.image} source='youtube' />
                </Grid.Column>
              ))
            }
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
