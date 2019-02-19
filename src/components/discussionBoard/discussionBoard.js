import React, { Component } from 'react';

import Appbar from './../../components/appbar/appbar.js'

import { Segment, Header, Rating, Icon, Grid, Button } from 'semantic-ui-react'

import './discussionBoard.css'

export default class DiscussionBoard extends Component {
  render(){
    return(
      <div style={{backgroundColor:'#e8eaed',marginTop:-20}}>

        <div style={styles.proConContainer}>
        </div>
        <br/>
        <Segment style={styles.segment} padded>
          <div style={styles.progress}></div>
          <div style={styles.progress}></div>
          <div style={styles.progress}></div>
          <div style={styles.progressGrey}></div>
          <Rating icon='heart' defaultRating={1} maxRating={1} style={{marginLeft:10}}/>
          <Icon name="info"  style={{marginLeft:5}}/>
          <br style={{clear:'both'}}/>
          <div style={{float:'right',marginTop:-25}}>
            11<Icon name="envelope" style={{marginLeft:7}}/>
          </div>
          <Header  style={styles.header}>The US should remove Confederate memorials, flags, and monuments from public spaces.</Header>
        </Segment>

        <Grid style={{marginLeft:90}}>
          <Grid.Row style={{margin:'20px 100px 0px 100px'}}>
            <Grid.Column width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <Header  inverted color="green">Pros</Header>
              <Button icon color="green" style={{float:'right',marginTop:-35}}><Icon name="plus" /></Button>
            </Grid.Column>

            <Grid.Column width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <Header  inverted color="red">Cons</Header>
              <Button icon color="red" style={{float:'right',marginTop:-35}}><Icon name="plus" /></Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{margin:'-25px 100px 0px 100px'}}>
            <Grid.Column className="greenBorder" width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.progressGrey}></div>
              <Rating icon='heart' defaultRating={0} maxRating={1} style={{marginLeft:10}}/>
              <div style={{float:'right'}}>
                9<Icon name="envelope" style={{marginLeft:5}}/>
              </div>
              <br/>
              <br/>
              <span>
                The statues can be kept without glorifying what they once stood for. They can be kept in museums with proper historical context rather than on a plinth to be admired.
              </span>
            </Grid.Column>

            <Grid.Column className="redBorder" width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.progressGrey}></div>
              <Rating icon='heart' defaultRating={0} maxRating={1} style={{marginLeft:10}}/>
              <div style={{float:'right'}}>
                10<Icon name="envelope" style={{marginLeft:5}}/>
              </div>
              <br/>
              <br/>
              <span>
                The statues can be kept without glorifying what they once stood for. They can be kept in museums with proper historical context rather than on a plinth to be admired.
              </span>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{margin:'-25px 100px 0px 100px'}}>
            <Grid.Column className="greenBorder" width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.progressGrey}></div>
              <Rating icon='heart' defaultRating={0} maxRating={1} style={{marginLeft:10}}/>
              <div style={{float:'right'}}>
                5<Icon name="envelope" style={{marginLeft:5}}/>
              </div>
              <br/>
              <br/>
              <span>
                The statues can be kept without glorifying what they once stood for. They can be kept in museums with proper historical context rather than on a plinth to be admired.
              </span>
            </Grid.Column>

            <Grid.Column className="redBorder" width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.progressGrey}></div>
              <Rating icon='heart' defaultRating={0} maxRating={1} style={{marginLeft:10}}/>
              <div style={{float:'right'}}>
                25<Icon name="envelope" style={{marginLeft:5}}/>
              </div>
              <br/>
              <br/>
              <span>
                The statues can be kept without glorifying what they once stood for. They can be kept in museums with proper historical context rather than on a plinth to be admired.
              </span>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{margin:'-25px 100px 0px 100px'}}>
            <Grid.Column  className="greenBorder" width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.progressGrey}></div>
              <Rating icon='heart' defaultRating={0} maxRating={1} style={{marginLeft:10}}/>
              <div style={{float:'right'}}>
                14<Icon name="envelope" style={{marginLeft:5}}/>
              </div>
              <br/>
              <br/>
              <span>
                The statues can be kept without glorifying what they once stood for. They can be kept in museums with proper historical context rather than on a plinth to be admired.
              </span>
            </Grid.Column>

            <Grid.Column className="redBorder" width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.progressGrey}></div>
              <Rating icon='heart' defaultRating={0} maxRating={1} style={{marginLeft:10}}/>
              <div style={{float:'right'}}>
                10<Icon name="envelope" style={{marginLeft:5}}/>
              </div>
              <br/>
              <br/>
              <span>
                The statues can be kept without glorifying what they once stood for. They can be kept in museums with proper historical context rather than on a plinth to be admired.
              </span>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{margin:'-25px 100px 0px 100px'}}>
            <Grid.Column className="greenBorder" width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.progressGrey}></div>
              <Rating icon='heart' defaultRating={0} maxRating={1} style={{marginLeft:10}}/>
              <div style={{float:'right'}}>
                7<Icon name="envelope" style={{marginLeft:5}}/>
              </div>
              <br/>
              <br/>
              <span>
                The statues can be kept without glorifying what they once stood for. They can be kept in museums with proper historical context rather than on a plinth to be admired.
              </span>
            </Grid.Column>

            <Grid.Column className="redBorder" width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.progressGrey}></div>
              <Rating icon='heart' defaultRating={0} maxRating={1} style={{marginLeft:10}}/>
              <div style={{float:'right'}}>
                56<Icon name="envelope" style={{marginLeft:5}}/>
              </div>
              <br/>
              <br/>
              <span>
                The statues can be kept without glorifying what they once stood for. They can be kept in museums with proper historical context rather than on a plinth to be admired.
              </span>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row   style={{margin:'-25px 100px 0px 100px'}}>
            <Grid.Column className="greenBorder" width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.pro}></div>
              <div style={styles.progressGrey}></div>
              <Rating icon='heart' defaultRating={0} maxRating={1} style={{marginLeft:10}}/>
              <div style={{float:'right'}}>
                89<Icon name="envelope" style={{marginLeft:5}}/>
              </div>
              <br/>
              <br/>
              <span>
                The statues can be kept without glorifying what they once stood for. They can be kept in museums with proper historical context rather than on a plinth to be admired.
              </span>
            </Grid.Column>

            <Grid.Column className="redBorder" width={7} style={{backgroundColor:'#fff',padding:20,margin:5}}>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.con}></div>
              <div style={styles.progressGrey}></div>
              <Rating icon='heart' defaultRating={0} maxRating={1} style={{marginLeft:10}}/>
              <div style={{float:'right'}}>
                35<Icon name="envelope" style={{marginLeft:5}}/>
              </div>
              <br/>
              <br/>
              <span>
                The statues can be kept without glorifying what they once stood for. They can be kept in museums with proper historical context rather than on a plinth to be admired.
              </span>
            </Grid.Column>
          </Grid.Row>


        </Grid>
      </div>
    );
  }
}

const styles = {
  segment:{
    margin:'20px 100px 20px 100px',
    border:'solid 1px #000'
  },
  header:{
    fontWeight:400,
    fontSize:30
  },
  progress:{
    height:10,
    width:25,
    backgroundColor:'black',
    float:'left',
    margin:'5px 2.5px 5px 2.5px'
  },
  progressGrey:{
    height:10,
    width:25,
    backgroundColor:'#d4d8dd',
    float:'left',
    margin:5
  },
  pro:{
    height:10,
    width:25,
    backgroundColor:'green',
    float:'left',
    margin:'5px 2.5px 5px 2.5px'
  },
  proConContainer:{
    textAlign:'center',
    justifyContent:'center',
    width:'100%'
  },
  con:{
    height:10,
    width:25,
    backgroundColor:'red',
    float:'left',
    margin:'5px 2.5px 5px 2.5px'
  },
}
