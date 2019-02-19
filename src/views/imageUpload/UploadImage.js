import React, { Component } from 'react';

//importing semantic-ui elements
import { Grid } from 'semantic-ui-react'

import Appbar from './../../components/appbar/appbar.js';
import ImageUploader from './../../components/imageUploader/imageUploader.js'
import ImageTiles from './../../components/imageTiles/imageTiles.js'

export default class ImageUpload extends Component {

  constructor(props){
    super(props);

    this.state = {
      imageArray:[
          'https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg',
          'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg',
          'https://www.washingtonpost.com/resizer/3tXukf59G1yVDu_C_2W1vcMYIQI=/960x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G2KO7SUUFM6UJFTWUI4WIYOBEE.jpg',
          'https://www.channelone.com/wp-content/uploads/2008/08/uspresidents-555x370.jpg']
    }

    this.uploadImage = this.uploadImage.bind(this);
  }

  uploadImage(){
    const array = this.state.imageArray;
    array.push('https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/Pulwama.jpeg?DyZii9U62LuycqoLGeG7isNLPVpY_LKJ');
    this.setState({imageArray:array});
  }

  render(){
    return(
      <div>
        <Appbar />

        <Grid padded divided>
          <Grid.Row>
            <Grid.Column width={8}>
              <ImageUploader uploadImage={this.uploadImage}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <ImageTiles imageArray={this.state.imageArray}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
