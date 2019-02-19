import React, { Component } from 'react';

import { Image, Header, Button, Menu, Grid } from 'semantic-ui-react'

import politics from './politics.jpeg';

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
        <Image src={politics} style={{width:window.innerWidth+14}}/>
        <div style={styles.textContainer}>
          <center><Header as={'h1'} inverted style={styles.text}>Discus and Debate #Politics</Header></center>
          <br/>
          <br/>
          <center><Header as={'h1'} inverted style={{fontWeight:500,fontSize:25}}>This section is about politics in its widest sense and includes legislation, conflicts and decision-making.</Header></center>
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
    width:'100%',
  },
  text:{
    fontSize:55,
    fontWeight:450
  },
  button:{
    zIndex:999,
    marginRight:25
  },
}
