import React, { Component } from 'react';

import { Grid, Embed, Button, Modal, Icon, Header} from 'semantic-ui-react'


export default class ReviewerVideoTiles extends Component {
  constructor(props){
    super(props);

    this.state={
      videoPopup: false,
      popup2: false,
    }
    this.videoSelected = this.videoSelected.bind(this);
  }

  videoSelected(){
      this.setState({videoPopup:true, popup2:false})
  }


  render(){
    return(
      <div>
        <h1 className="uploadImageTitle"> Uploaded Videos</h1>

        <Grid >
          <Grid.Row centered style={{marginTop:10}}>
            <Grid.Column width={3} >
            <Embed id='ptxLsJ-22Y8'  placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeu_snKl4CV1rtNq8_u5iP4nMPetZxVaf64JoDdEWyqCYJ6-d' source='youtube' />
            <Button color='blue' style={{marginLeft:50, marginTop:10 }} onClick={this.videoSelected }> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='OFPwDe22CoY' placeholder='https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1100/xkdeodmpccvxs7elbiyv' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='1i9kcBHX2Nw' placeholder='https://pixel.nymag.com/imgs/daily/intelligencer/2018/10/12/12-incivility.w700.h700.jpg' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='KqJs_NHjV14' placeholder='https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/01/18/104225995-_95A5004.530x298.jpg?v=1540458420' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='KqJs_NHjV14' placeholder='https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/01/18/104225995-_95A5004.530x298.jpg?v=1540458420' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered >
            <Grid.Column width={3} >
            <Embed id='ptxLsJ-22Y8' placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeu_snKl4CV1rtNq8_u5iP4nMPetZxVaf64JoDdEWyqCYJ6-d' source='youtube' />
            <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='OFPwDe22CoY' placeholder='https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1100/xkdeodmpccvxs7elbiyv' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='1i9kcBHX2Nw' placeholder='https://pixel.nymag.com/imgs/daily/intelligencer/2018/10/12/12-incivility.w700.h700.jpg' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='KqJs_NHjV14' placeholder='https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/01/18/104225995-_95A5004.530x298.jpg?v=1540458420' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='KqJs_NHjV14' placeholder='https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/01/18/104225995-_95A5004.530x298.jpg?v=1540458420' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered >
            <Grid.Column width={3} >
            <Embed id='ptxLsJ-22Y8' placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeu_snKl4CV1rtNq8_u5iP4nMPetZxVaf64JoDdEWyqCYJ6-d' source='youtube' />
            <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='OFPwDe22CoY' placeholder='https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1100/xkdeodmpccvxs7elbiyv' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='1i9kcBHX2Nw' placeholder='https://pixel.nymag.com/imgs/daily/intelligencer/2018/10/12/12-incivility.w700.h700.jpg' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='KqJs_NHjV14' placeholder='https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/01/18/104225995-_95A5004.530x298.jpg?v=1540458420' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
            <Grid.Column width={3} >
              <Embed id='KqJs_NHjV14' placeholder='https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/01/18/104225995-_95A5004.530x298.jpg?v=1540458420' source='youtube' />
              <Button color='blue' style={{marginLeft:50, marginTop:10 }}> Use Video </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>


      <Modal size='small'  open={this.state.videoPopup} >
       <Modal.Header>Video  Selected </Modal.Header>
         <Modal.Description>
           <Header style={{marginLeft:20}}> Are you sure want to use this video ?</Header>
         </Modal.Description>
       <Modal.Actions>
         <Button color='black' onClick={()=>{this.setState({videoPopup:false})}}>
         <Icon name ='x'/>
           No
         </Button>
         <Button
           positive
           icon='checkmark'
           labelPosition='left'
           content="Yes"
           onClick={()=>{this.setState({videoPopup:false,popup2:true })}}
         />
       </Modal.Actions>
     </Modal>

     <Modal  open={this.state.popup2}  size='small'>
      <Header> <Icon name="currency" />Andrew will be rewarded with 25 NATs </Header>
      <Modal.Actions>
        <Button basic color='green'  onClick={()=>{this.setState({popup2:false})}}>
          <Icon name='checkmark' /> ok
        </Button>
      </Modal.Actions>
    </Modal>

       </div>
    );
  }
}
