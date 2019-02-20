import React, { Component } from 'react';

import {Search, Grid, Image, Reveal, Button,Header, Input , } from 'semantic-ui-react'


export default class ReviewerImageTiles extends Component {
  render(){
    return(
      <div>

        <br /> <br />
        <Grid>
          <Grid.Row style={{marginLeft:40}}>
            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', paddingTop:10}}> Pulwama Attack </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button standard inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image  style={styles.size} src="https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', paddingTop:10}}> Leader's Communication </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://www.washingtonpost.com/resizer/3tXukf59G1yVDu_C_2W1vcMYIQI=/960x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G2KO7SUUFM6UJFTWUI4WIYOBEE.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', paddingTop:10}}> Barack Obama </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://www.channelone.com/wp-content/uploads/2008/08/uspresidents-555x370.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', paddingTop:10}}> Rock Images </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', paddingTop:10}}> Pulwama Attack </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button > Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const styles = {
  size:{
    height:160,
    width:250,
  },
}
