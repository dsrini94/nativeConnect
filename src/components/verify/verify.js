import React, { Component } from 'react';

import { TextArea, Input, Grid, Button, Divider, Image, Header } from 'semantic-ui-react';


import './verify.css';

const previouslyVerifiedArray = [
{
  image:'https://img.etimg.com/thumb/msid-67995389,width-615,resizemode-4,imgsize-480890/pulwama-terror-attack-live-updates.jpg',
  title:'Puluwama Attack',
  content:'Manchester United and Paris Saint-Germain have been charged by UEFA for incidents during Tuesdays last-16 first leg at Old Trafford.'
},
{
  image:'https://smedia2.intoday.in/btmt/images/stories/pm-oil-ceos_660_101418023138.jpg',
  title:'Narendra Modi announces',
  content:'Manchester United and Paris Saint-Germain have been charged by UEFA for incidents during Tuesdays last-16 first leg at Old Trafford.'
},
{
  image:'https://timesofindia.indiatimes.com/thumb/msid-68005025,imgsize-880493,width-400,resizemode-4/68005025.jpg ',
  title:'Putin visits India',
  content:'Manchester United and Paris Saint-Germain have been charged by UEFA for incidents during Tuesdays last-16 first leg at Old Trafford.'
}
];

export default class NewsCard extends Component {

  constructor(props){
    super(props);

    this.state = {
      previouslyVerifiedArray:[]
    }

    this.handleLoadPreviously = this.handleLoadPreviously.bind(this);
  }

  handleLoadPreviously(){
    this.setState({previouslyVerifiedArray:previouslyVerifiedArray});
  }

  render(){
    return(
      <Grid padded divided>

        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
          <center>
             <h1 className="subHeaders1">Summary</h1>
             <TextArea rows={7} autoHeight placeholder='Try adding multiple lines'  style={{width:400}}/>
             <br/>
             <br/>
             <Divider horizontal>Previously Verified</Divider>
             <Button primary onClick={this.handleLoadPreviously}>Load Previously Verified Articles</Button>
           </center>

             <div>
               {this.state.previouslyVerifiedArray.map((item) => (<Grid padded>
                 <Grid.Row>
                   <Grid.Column width={5}>
                     <Image src={item.image} />
                   </Grid.Column>

                   <Grid.Column width={11}>
                     <Header as='h3' color="blue">{item.title}</Header>
                     <span>{item.content}</span>
                   </Grid.Column>
                 </Grid.Row>
               </Grid>))}
             </div>

          </Grid.Column>

          <Grid.Column width={10}>

            <Grid>

              <Grid.Row>
                <Grid.Column width={6}>
                  <center><h1 className="subHeaders1">Paste your Link</h1></center>
                </Grid.Column>

                <Grid.Column width={10}>
                  <Input label='http://' placeholder='mysite.com' style={{width:400}}/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={6}>
                  <center><h1 className="subHeaders1">Contention</h1></center>
                </Grid.Column>

                <Grid.Column width={10}>
                  <TextArea rows={6} autoHeight placeholder='Contention'  style={{width:400}}/>
                </Grid.Column>
              </Grid.Row>


                <Grid.Row>
                <Grid.Column width={6}>
                  <center><h1 className="subHeaders1">Verification</h1></center>
                </Grid.Column>

                <Grid.Column width={10}>
                  <TextArea rows={6} autoHeight placeholder='Verification'  style={{width:400}}/>
                </Grid.Column>
              </Grid.Row>


                <Grid.Row>
                <Grid.Column width={6}>
                  <center><h1 className="subHeaders1">Source</h1></center>
                </Grid.Column>

                <Grid.Column width={10}>
                  <TextArea rows={6} autoHeight placeholder='Source'  style={{width:400}}/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
              <Grid.Column width={16}>
                <center> <Button primary>Submit</Button></center>
              </Grid.Column>
            </Grid.Row>
            </Grid>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
