import React, { Component } from 'react';

//importing semantic-ui elements
import { Menu, Dropdown, Image } from 'semantic-ui-react'

import { Link } from "react-router-dom";

import avatar from './avatar.png';
//import coins from './Coins.png';


export default class AdminHomePage extends Component {

  constructor(props){
    super(props);

    this.state={activeItem:'NewsConnect',nats:100}

    this.handleItemClick = this.handleItemClick.bind(this);
  }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    return(
      <Menu inverted color="blue" secondary size="massive">
      <Menu.Item disabled as={Link} to='/adminVerify'
          name='NewsConnect'
          active={this.state.activeItem === 'NewsConnec'}
          onClick={this.handleItemClick}>
          <span style={styles.title}>ENGAGE</span>
        </Menu.Item>

        <Menu.Menu position='right'>

          <Menu.Item as={Link} to='/adminVerify'>
            Verification
          </Menu.Item>

          <Menu.Item as={Link} to='/adminImage'>
            Image
          </Menu.Item>

         <Menu.Item as={Link} to='/adminVideo'>
            Video
          </Menu.Item>

          <Menu.Item style={styles.menuItem}>
            <Image src={avatar} size="tiny" style={styles.image}/>
          </Menu.Item>

          <Dropdown item text='Admin'>
            <Dropdown.Menu>
              <Dropdown.Item>My Account</Dropdown.Item>
              <Dropdown.Item as={Link} to='/'>SignOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>

          </Menu.Item>

        </Menu.Menu>
      </Menu>
    );
  }
}


const styles = {
  title:{
    color:'white',
    fontSize:25,
    letterSpacing:'5px',
    cursor:'pointer',
    marginLeft: 25
  },
  image:{
    height:35,
    width:35,
  },
  menuItem:{
    marginRight:'-20px'
  }
}
