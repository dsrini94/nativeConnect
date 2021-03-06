
import React, { Component } from 'react';

import { Button, Input, Header, Image} from 'semantic-ui-react'

import { Link } from "react-router-dom";

class LoginPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      userName:'',
      routeName:'/home'
    }

    this.handleUserName = this.handleUserName.bind(this);

  }

  handleUserName(e){
    this.setState({userName:e.target.value},()=>{
        if(this.state.userName === 'admi'){
          this.setState({routeName:'/adminVerify'});
        }
    });

  }

  render() {
    return (
      <div style={{backgroundColor:'#3b5998',height:'100vh'}}>
      <div style={styles.paddingcenter}>
        <div style={styles.layout}>
         <Image style={{height:50,width:50,float:'left',marginTop:13,marginRight:9,marginLeft:-20}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Associated_Press_logo_2012.svg/873px-Associated_Press_logo_2012.svg.png" />
         <Header size='large' style={styles.topheading}>Associated Press</Header>
         <Header size='tiny'style={styles.textcolor} >Login to Associated Press portal </Header>
              <form>
                <div style={styles.paddingtop}>
                  <Input icon='user' iconPosition='left' placeholder='Username' type='Email' style={styles.emailtag} onChange={this.handleUserName}/>

                </div>
                <div style={styles.paddingemailtag}>
                  <Input icon='lock' iconPosition='left' placeholder='Password' type='Password' style={styles.emailtag}/>
                </div>
              </form>
            </div>

           <div style={styles.layoutbottom} >
                 <Button as={Link} to={this.state.routeName} type="submit" size='medium' style={styles.submitbtn}>Login</Button>
            </div>
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
    paddingTop: 20, letterSpacing: 2, fontSize:'2.4rem', fontWeight:500, color: '#3b5998', height:55,
  },
imgtag:{
  height:130, width:130, marginLeft:'36%'
},
layout:{width: 400, height: '56vh', margin: '0 auto', background: '#F0F3F4', color: '#fff', paddingLeft:40, paddingRight:40},
layoutbottom:{width:400, backgroundColor:"#4f2d8e", margin:'0 auto', height:90,},
labeltag:{ marginLeft:"23%", fontSize:'1.2rem', fontWeight:400,},
emailtag:{ width:'90%', marginTop:14},
paddingtop:{ marginTop:45, },
paddingemailtag:{marginTop:20,},
paddingcenter:{ paddingTop:'8%'},
textcolor:{color:'#3b5998',},
}

export default LoginPage;
