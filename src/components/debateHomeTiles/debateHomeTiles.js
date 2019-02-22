import React, { Component } from 'react';

import { Image, Header, Menu, Grid } from 'semantic-ui-react'

export default class DebateHomeTile extends Component {

  constructor(props){
    super(props);

    this.state = { activeItem:'Trending'}
  }

  render(){
    return(
      <div style={styles.container}>

        <div style={{marginLeft:50,marginTop:20}}>
        <Menu pointing secondary size={'huge'}>
          <Menu.Item name='Trending' active={this.state.activeItem === 'Trending'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Most Popular'
            active={this.state.activeItem === 'Most Popular'}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Grid style={{margin:20}}>
          <Grid.Row columns={3}>

            <Grid.Column>
              <Image size="large" src="https://nahu.org/media/1099/blonde-woman-podium-speaking.jpg?crop=0,0,0,0.37484371092773194&cropmode=percentage&width=1800&height=750&rnd=131552284180000000&quality=60&cacheBuster=false" />
              <br/>
              <center><Header>Should Governments Ever Limit Free Speech?</Header></center>
            </Grid.Column>

            <Grid.Column>
              <Image size="large" src="https://media.swncdn.com/cms/CW/54992-church-ThinkstockPhotos-139605937.1200w.tn.jpg" />
              <br/>
              <center><Header>Should Governments Ever Limit Free Speech?</Header></center>
            </Grid.Column>

            <Grid.Column>
              <Image size="large" src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/12/753361-statueofunity-reuters-110118.jpg" />
              <br/>
              <center><Header>Should Governments Ever Limit Free Speech?</Header></center>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>

      </div>
    );
  }
}

const styles = {
  container:{
    position:'relative'
  },
  textContainer:{
    position:'absolute',
    top:'45%',
    left:'50%',
    transform:'translate(-50%,-50%)',
  },
  image:{
    height:100
  },
  text:{
    fontSize:65
  },
  button:{
    zIndex:999,
    marginRight:30
  },
}
