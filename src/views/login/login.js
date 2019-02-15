import React, { Component } from 'react';

import { Button, Icon, Input, Header, Image} from 'semantic-ui-react'

import { Link } from "react-router-dom";


class LoginPage extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#3b5998',height:'100vh'}}>
      <div style={styles.paddingcenter}>
        <div style={styles.layout}>
         <Header size='huge' style={styles.topheading}> NewsConnect</Header>
         <Header size='tiny'style={styles.textcolor} >Fill out the form below to login to NewsConnect portal </Header>
              <form>
                <div style={styles.paddingtop}>
                  <Input icon='user' iconPosition='left' placeholder='Username' type='Email' style={styles.emailtag}/>
                </div>
                <div style={styles.paddingemailtag}>
                  <Input icon='lock' iconPosition='left' placeholder='Username' type='Password' style={styles.emailtag}/>
                </div>
              </form>
            </div>
          <Link to="/home">
           <div style={styles.layoutbottom} >
                 <Button type="submit" size='medium' style={styles.submitbtn}>Login</Button>
            </div>
          </Link>
    </div>
  </div>
    );
  }
}


const styles = {
  submitbtn:{
    marginLeft:'60%', marginTop:30,  borderRadius:3, paddingLeft: 30, paddingRight: 30, backgroundColor:'white', color: '#3b5998',
  },
  register:{
    marginLeft:'20%', marginTop:30,  borderRadius:10, paddingLeft: 30, paddingRight: 30, backgroundColor:'white', color: '#3b5998',
  },
  topheading:{
    paddingTop: 20, letterSpacing: 2, fontSize:'2.8rem', fontWeight:500, color: '#3b5998', height:55,
  },
imgtag:{
  height:130, width:130, marginLeft:'36%'
},
layout:{width: 400, height: '56vh', margin: '0 auto', background: '#F0F3F4', color: '#fff', paddingLeft:40, paddingRight:40},
layoutbottom:{width:400, backgroundColor:"red", margin:'0 auto', height:90,},
labeltag:{ marginLeft:"23%", fontSize:'1.2rem', fontWeight:400,},
emailtag:{ width:'90%', marginTop:14},
paddingtop:{ marginTop:45, },
paddingemailtag:{marginTop:20,},
paddingcenter:{ paddingTop:'8%'},
textcolor:{color:'#3b5998',},
}

export default LoginPage;
