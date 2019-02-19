import React, { Component } from 'react';

import { Image, Header, Button, Menu, Grid } from 'semantic-ui-react'

import background from './background.jpeg';

//importing Router package
import { Link } from "react-router-dom";

export default class DebatesPage extends Component {

  constructor(props){
    super(props);

    this.state = { activeItem:'Trending'}
  }

  render(){
    return(
      <div style={styles.container}>
        <Image src={background} style={{width:window.innerWidth+14}}/>
        <div style={styles.textContainer}>
          <center><Header as={'h1'} inverted style={styles.text}>Explore Discussions</Header></center>
          <br/>
          <br/>
          <br/>
          <Button as={Link} to='/politics' inverted style={styles.button}>Politics</Button>
          <Button inverted style={styles.button}>Philosophy</Button>
          <Button inverted style={styles.button}>Science</Button>
          <Button inverted style={styles.button}>Ethics</Button>
          <Button inverted style={styles.button}>Gender</Button>
          <Button inverted style={styles.button}>Religion</Button>
          <br/>
          <br/>
          <br/>
          <div style={{marginLeft:25}}>
            <center>
              <Button inverted style={styles.button}>Technology</Button>
              <Button inverted style={styles.button}>Education</Button>
            </center>
          </div>
        </div>

      </div>
    );
  }
}

const styles = {
  container:{
    margin:-14,
    position:'relative'
  },
  textContainer:{
    position:'absolute',
    top:'45%',
    left:'50%',
    transform:'translate(-50%,-50%)',

  },
  text:{
    fontSize:65
  },
  button:{
    zIndex:999,
    marginRight:20
  },
}
