import React, { Component } from 'react';

//importing semantic-ui elements
import { Menu, Dropdown, Button, Image } from 'semantic-ui-react'

import { Link } from "react-router-dom";


export default class HomePage extends Component {

  constructor(props){
    super(props);

    this.state={activeItem:'NewsConnect'}

    this.handleItemClick = this.handleItemClick.bind(this);
  }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    return(
      <Menu inverted color="blue" secondary size="massive">
      <Menu.Item disabled as={Link} to='/home'
          name='NewsConnect'
          active={this.state.activeItem === 'NewsConnec'}
          onClick={this.handleItemClick}>
          <span style={styles.title}>NewsConnect</span>
        </Menu.Item>

        <Menu.Menu position='right'>

          <Menu.Item as={Link} to='/verify'>
            Verify
          </Menu.Item>

          <Menu.Item as={Link} to='/imageUpload'>
            Image
          </Menu.Item>

         <Menu.Item as={Link} to='/videoUpload'>
            Video
          </Menu.Item>

          <Menu.Item as={Link} to='/videoUpload'>
            Lists
          </Menu.Item>

          <Menu.Item as={Link} to='/videoUpload'>
            Database
          </Menu.Item>

          <Menu.Item style={styles.menuItem}>
            <Image src="https://openclipart.org/image/2400px/svg_to_png/280156/Faceless-Male-Avatar-In-Suit-2.png" size="tiny" style={styles.image}/>
          </Menu.Item>

          <Dropdown item text='Andrew'>
            <Dropdown.Menu>
              <Dropdown.Item>100 NATs</Dropdown.Item>
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
  },
  image:{
    height:35,
    width:35,
  },
  menuItem:{
    marginRight:'-20px'
  }
}
