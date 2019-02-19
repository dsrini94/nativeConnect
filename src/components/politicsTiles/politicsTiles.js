import React, { Component } from 'react';

import { Image, Header, Button, Menu, Grid } from 'semantic-ui-react'

//importing Router package
import { Link } from "react-router-dom";

export default class PoliticsTiles extends Component {

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
              <Image as={Link} to='/discussion' size="large" src="https://www.newstatesman.com/sites/default/files/styles/lead_image/public/Longreads_2018/08/cover_art.jpg?itok=Bi5qEOrz" />
              <br/>
              <center><Header>Should Governments Ever Limit Free Speech?</Header></center>
            </Grid.Column>

            <Grid.Column>
              <Image size="large" src="https://i.ytimg.com/vi/mxgOjH7szdk/maxresdefault.jpg" />
              <br/>
              <center><Header>Should Governments Ever Limit Free Speech?</Header></center>
            </Grid.Column>

            <Grid.Column>
              <Image size="large" src="http://anewdomain.net/wp-content/uploads/2018/01/62-Siege-Media-GetCRM-Office-Politics-Header-v1-810x425.jpg" />
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
