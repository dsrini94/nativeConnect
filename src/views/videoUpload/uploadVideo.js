import React, { Component } from 'react';

//importing semantic-ui elements
import { Grid } from 'semantic-ui-react'

import Appbar from './../../components/appbar/appbar.js';
import VideoUploader from './../../components/videoUploader/videoUplaoder.js'
import VideoTiles from './../../components/videoTiles/videoTiles.js'

export default class VideoUpload extends Component {

  constructor(props){
    super(props);

    this.state ={
      videoArray:[
        {
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeu_snKl4CV1rtNq8_u5iP4nMPetZxVaf64JoDdEWyqCYJ6-d',
          video:'ptxLsJ-22Y8'
        },
        {
          image:'https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1100/xkdeodmpccvxs7elbiyv',
          video:'OFPwDe22CoY'
        },
        {
          image:'https://pixel.nymag.com/imgs/daily/intelligencer/2018/10/12/12-incivility.w700.h700.jpg',
          video:'1i9kcBHX2Nw'
        },
        {
          image:'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/01/18/104225995-_95A5004.530x298.jpg?v=1540458420',
          video:'KqJs_NHjV14'
        }
      ]
    }

    this.uploadVideo = this.uploadVideo.bind(this);
  }

  uploadVideo(){
    var array = this.state.videoArray;
    array.push({
      image:'https://smedia2.intoday.in/btmt/images/stories/jammu-curfew_660x450_021719073435.jpg',
      video:'qP8e7lFdEho'
    });

    this.setState({videoArray:array})
  }

  render(){
    return(
      <div>
        <Appbar />

        <Grid padded divided>
          <Grid.Row>
            <Grid.Column width={8}>
              <VideoUploader uploadVideo={this.uploadVideo}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <VideoTiles videoArray={this.state.videoArray}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
