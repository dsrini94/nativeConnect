import React, { Component } from 'react';

import { Grid, Embed, Reveal, Button } from 'semantic-ui-react'


export default class ReviewerVideoTiles extends Component {
  render(){
    return(
      <div>
        <h1 className="uploadImageTitle">Previously Uploaded Videos</h1>


        <Grid >
          <Grid.Row>
            <Grid.Column width={5} style={{marginTop:'20px'}}>
            <Reveal animated='small fade' >
              <Reveal.Content visible>
              <Embed id='ptxLsJ-22Y8' placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeu_snKl4CV1rtNq8_u5iP4nMPetZxVaf64JoDdEWyqCYJ6-d' source='youtube' />
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button standard inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={5} style={{marginTop:'20px'}}>
              <Embed id='OFPwDe22CoY' placeholder='https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1100/xkdeodmpccvxs7elbiyv' source='youtube' />
            </Grid.Column>

            <Grid.Column width={5} style={{marginTop:'20px'}}>
              <Embed id='1i9kcBHX2Nw' placeholder='https://pixel.nymag.com/imgs/daily/intelligencer/2018/10/12/12-incivility.w700.h700.jpg' source='youtube' />
            </Grid.Column>

            <Grid.Column width={5} style={{marginTop:'20px'}}>
              <Embed id='KqJs_NHjV14' placeholder='https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/01/18/104225995-_95A5004.530x298.jpg?v=1540458420' source='youtube' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
