import React, { Component } from 'react';

import { Grid, Image } from 'semantic-ui-react'


export default class ImageTiles extends Component {

  render(){
    return(
      <div>
        <h1 className="uploadImageTitle">Previously Uploaded Images</h1>
        <br />

        <Grid>
          <Grid.Row>
            {
              this.props.imageArray.map(item => (
                <Grid.Column width={5}>
                  <Image src={item} />
                </Grid.Column>
              ))
            }
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
