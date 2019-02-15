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
            <Grid.Column width={5}>
              <Image src="https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg" />
            </Grid.Column>

            <Grid.Column width={5}>
              <Image src="https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg" />
            </Grid.Column>

            <Grid.Column width={5}>
              <Image src="https://www.washingtonpost.com/resizer/3tXukf59G1yVDu_C_2W1vcMYIQI=/960x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G2KO7SUUFM6UJFTWUI4WIYOBEE.jpg" />
            </Grid.Column>

            <Grid.Column width={5}>
              <Image src="https://www.channelone.com/wp-content/uploads/2008/08/uspresidents-555x370.jpg" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
