import _ from 'lodash'
import React, { Component } from 'react';

import {Search, Grid, Image, Reveal, Button,Header, Modal,Icon } from 'semantic-ui-react'

let points = 100;
export default class ReviewerImageTiles extends Component {
  constructor(props){
    super(props);

    this.state={
      options:[
  {
    "title": "Pulwama Attack",
    "image": "https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg",
  },
  {
    "title": "Leader's Communication",
    "image": "https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg",
  },
  {
    "title": "Barack Obama",
    "image": "https://www.washingtonpost.com/resizer/3tXukf59G1yVDu_C_2W1vcMYIQI=/960x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G2KO7SUUFM6UJFTWUI4WIYOBEE.jpg",
  },
  {
    "title": "Rock Images",
    "image": "https://www.channelone.com/wp-content/uploads/2008/08/uspresidents-555x370.jpg",
  },
  {
    "title": "Pulwama Attack",
    "image": "https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg",
  },
  {
    "title": "Pulwama Attack",
    "image": "https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg",
  },
  {
    "title": "Leader's Communication",
    "image": "https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg",
  },
  {
    "title": "Barack Obama",
    "image": "https://www.washingtonpost.com/resizer/3tXukf59G1yVDu_C_2W1vcMYIQI=/960x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G2KO7SUUFM6UJFTWUI4WIYOBEE.jpg",
  },
  {
    "title": "Rock Images",
    "image": "https://www.channelone.com/wp-content/uploads/2008/08/uspresidents-555x370.jpg",
  },
  {
    "title": "Pulwama Attack",
    "image": "https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg",
  },
  {
    "title": "Pulwama Attack",
    "image": "https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg",
  },
  {
    "title": "Leader's Communication",
    "image": "https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg",
  },
  {
    "title": "Barack Obama",
    "image": "https://www.washingtonpost.com/resizer/3tXukf59G1yVDu_C_2W1vcMYIQI=/960x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G2KO7SUUFM6UJFTWUI4WIYOBEE.jpg",
  },
  {
    "title": "Rock Images",
    "image": "https://www.channelone.com/wp-content/uploads/2008/08/uspresidents-555x370.jpg",
  },
  {
    "title": "Pulwama Attack",
    "image": "https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg",
  }
],
 isloading: false,
 value:"",
 modalOpen:false,
 results:[],
 model1open: false,
 model2open: false,
title:'',
owner:'',
img:''
    }
    this.resetComponent = this.resetComponent.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.onItemClickHandler = this.onItemClickHandler.bind(this)
    this.imageSelected = this.imageSelected.bind(this);
    this.rewardNats = this.rewardNats.bind(this);
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent() { this.setState({ isLoading: false, results: [], value: '' })}

  handleResultSelect(e, { result }) {
    console.log("handle result clicked !!")
    this.setState({ value: result.title, modalOpen:true })
  }

  handleSearchChange(e, { value }) {
      this.setState({ isLoading: true, value })

      setTimeout(() =>  {
      if (this.state.value.length < 1) return this.resetComponent()
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)
      this.setState({
        isLoading: false,
        results: _.filter(this.state.options, isMatch),
      })
    }, 300)
  }

  imageSelected(img,title,owner){
    console.log("clicked");
    this.setState({model1open:true,img:img,title:title,owner:owner})
  }

  onItemClickHandler(){
    console.log("clicked");
  }

  rewardNats(){
    if(typeof(Storage !== undefined)){
      localStorage.setItem("notifications", "25");
      this.setState({model2open:false});
    }
  }

  render(){
    const { isLoading, value, results } = this.state
    return(
      <div>
        <br />
          <div style={{marginLeft:'80%'}}>
          <Search
              loading={isLoading}
              onResultSelect={this.handleResultSelect  }
              onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
              results={results}
              value={value}
              {...this.props}
            />
        <Modal open={this.state.modalOpen} >
            <Modal.Header>Leader's Communication </Modal.Header>
            <Modal.Content image >
              <Image style={styles.size} src="https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg" />
              <Modal.Description>
                <p style={{marginRight:40}}>All the CRPF soldiers were customers of the Bank under Defence Salary Package where the bank provides insurance of Rupees 30 lacs to each of the defence personnel," the bank said in a statement. "The bank is taking steps to expedite release of insurance money to the next of kin of the martyred soldiers," it added.
          23 soldiers had also availed of loans from SBI and the bank has decided to waive off all the outstanding loans with immediate effect.</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>

              <Button color='green' onClick={()=>{this.setState({modalOpen:false})}}>
                 close
              </Button>
            </Modal.Actions>
          </Modal>

            </div>
         <br /> <br />
        <Grid>
          <Grid.Row centered style={{marginBottom:20}}>
            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size} onClick={()=>this.imageSelected('https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg','Pulwama Attack','Andrew')}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', }}> Pulwama Attack </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button standard inverted  > Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image  style={styles.size} src="https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', }}> Leader's Communication </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://www.washingtonpost.com/resizer/3tXukf59G1yVDu_C_2W1vcMYIQI=/960x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G2KO7SUUFM6UJFTWUI4WIYOBEE.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', }}> Barack Obama </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://www.channelone.com/wp-content/uploads/2008/08/uspresidents-555x370.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', }}> Rock Images </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', }}> Pulwama Attack </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered style={{marginBottom:20}}>
            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size} onClick={this.imageSelected}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', }}> Pulwama Attack </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button standard inverted  > Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image  style={styles.size} src="https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center',}}> Leader's Communication </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://www.washingtonpost.com/resizer/3tXukf59G1yVDu_C_2W1vcMYIQI=/960x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G2KO7SUUFM6UJFTWUI4WIYOBEE.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', }}> Barack Obama </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://www.channelone.com/wp-content/uploads/2008/08/uspresidents-555x370.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center',}}> Rock Images </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center',}}> Pulwama Attack </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered style={{marginBottom:20}}>
            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size} onClick={this.imageSelected}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', }}> Pulwama Attack </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button standard inverted  > Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image  style={styles.size} src="https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center',}}> Leader's Communication </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://www.washingtonpost.com/resizer/3tXukf59G1yVDu_C_2W1vcMYIQI=/960x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G2KO7SUUFM6UJFTWUI4WIYOBEE.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center', }}> Barack Obama </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://www.channelone.com/wp-content/uploads/2008/08/uspresidents-555x370.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center',}}> Rock Images </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>

            <Grid.Column width={3}>
            <Reveal animated='small fade' style={styles.size}>
              <Reveal.Content visible>
                <Image style={styles.size} src="https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg" />
                <Header as='h4' style={{margin:0, textAlign:'center',}}> Pulwama Attack </Header>
              </Reveal.Content>
              <Reveal.Content hidden align="center">
              <div style={{backgroundColor:'#2185d0', height:160}}>
                <br /> <br /> <br />
                <Button inverted> Use Image </Button>
              </div>
              </Reveal.Content>
            </Reveal>
            </Grid.Column>
          </Grid.Row>

        </Grid>
        <Modal open={this.state.model1open} >
         <Modal.Header>{this.state.owner}'s Photo</Modal.Header>
         <Modal.Content image>
           <Image wrapped size='huge' src={this.state.img} />
           <Modal.Description>
             <Header>{this.state.title}</Header>
             <p>All the CRPF soldiers were customers of the Bank under Defence Salary Package where the bank provides insurance of Rupees 30 lacs to each of the defence personnel," the bank said in a statement. "The bank is taking steps to expedite release of insurance money to the next of kin of the martyred soldiers," it added.
       23 soldiers had also availed of loans from SBI and the bank has decided to waive off all the outstanding loans with immediate effect.</p>
             <p>Do you really want to use?</p>
           </Modal.Description>
         </Modal.Content>
         <Modal.Actions>
           <Button color='black' onClick={()=>{this.setState({model1open:false})}}>
             No
           </Button>
           <Button
             positive
             icon='checkmark'
             labelPosition='right'
             content="Yes"
             onClick={()=>{this.setState({model1open:false, model2open:true})}}
           />
         </Modal.Actions>
       </Modal>

       <Modal open={this.state.model2open}  size='small'>
    <Header> <Icon name="currency" />{this.state.owner} will be rewarded with 25 NATs </ Header>

    <Modal.Actions>
      <Button basic color='green'  onClick={this.rewardNats}>
        <Icon name='checkmark' /> ok
      </Button>

    </Modal.Actions>
  </Modal>
      </div>
    );
  }
}

const styles = {
  size:{
    height:160,
    width:250,
  },
}
