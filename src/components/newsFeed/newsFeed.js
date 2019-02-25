import React, { Component } from 'react';

//importing semantic-ui elements
import { Grid, Image, Card, Icon } from 'semantic-ui-react';

import { Link } from "react-router-dom";
//importing css
import './newsFeed.css'

const extra = (
  <div>
  <a style={{marginRight:'10px'}}>
    <Icon name='eye' size="large"/>
  </a>
  <a style={{marginRight:'10px'}}>
    <Icon name='image' size="large"/>
  </a>
  <a style={{marginRight:'10px'}}>
    <Icon name='video' size="large"/>
  </a>
  <a>
    <Icon name='database' size="large"/>
  </a>
</div>
)


export default class NewsFeed extends Component {
  render(){
    return(
      <Grid padded>

        <Grid.Row style={{marginTop:'10px',marginBottom:'10px'}}>
          <Grid.Column width={16}>
            <center><span style={styles.title}>Today's Highlights</span></center>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <Image src='https://cdn-03.independent.ie/sport/soccer/article37811509.ece/3f8b7/AUTOCROP/w620h342/2019-02-13_spo_47954688_I1.JPG' />
          </Grid.Column>

          <Grid.Column width={8} style={{marginLeft:-30}}>
            <br/>
            <div className="headLines">Manchester United and Paris Saint-Germain both charged by UEFA</div>
            <br/>
            <br/>
            <div className="news">Manchester United and Paris Saint-Germain have been charged by UEFA for incidents during Tuesday's last-16 first leg at Old Trafford.United face two charges after their supporters were accused of blocking stairways and throwing objects during the game, which ended 2-0 to PSG.Meanwhile, PSG have been hit by four different counts with the travelling fans alleged to have set off fireworks, thrown objects and committed acts of damage along with other crowd disturbances.</div>

            <br/>
            <div style={{float:'right'}}>
            <Link to='/verify' style={{marginRight:'10px'}}>
              <Icon name='eye' size="large" />
            </Link>
            <Link to='/imageUpload' style={{marginRight:'10px'}}>
              <Icon name='image' size="large" />
            </Link>
            <Link to='/videoUpload' style={{marginRight:'10px'}}>
              <Icon name='video' size="large" />
            </Link>
            <Link to='/debates' style={{marginRight:'10px'}}>
              <Icon name='database' size="large" />
            </Link>
          </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={4}>
            <Card
               image='https://img.etimg.com/thumb/msid-67418161,width-643,imgsize-77026,resizemode-4/whatsapp.jpg'
               header='WhatsApp'
               meta='Friend'
               description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
               extra={extra}
             />
          </Grid.Column>

          <Grid.Column width={4}>
            <Card
               image='https://smedia2.intoday.in/btmt/images/stories/indian_railway_660_050418065654.jpg'
               header='Express'
               meta='Friend'
               description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
               extra={extra}
             />
          </Grid.Column>

          <Grid.Column width={4}>
            <Card
               image='https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/political_protest_illustration.jpg?itok=ZDJV-J8V'
               header='Election'
               meta='Friend'
               description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
               extra={extra}
             />
          </Grid.Column>

          <Grid.Column width={4}>
            <Card
               image='https://www.evolvedigitas.com/blog/wp-content/uploads/2018/04/education.jpg'
               header='Education'
               meta='Friend'
               description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
               extra={extra}
             />
          </Grid.Column>

        </Grid.Row>

      </Grid>
    );
  }
}

const styles = {
  title:{
    color:'#3b5998',
    fontSize:28,
    fontWeight:500,
    letterSpacing:2
  },
  newsHeadlines:{
    fontFamily: 'Open Sans',
    color:'#3b5998',
    fontWeight:500,
    fontSize:28,
    lineHeight:1.2
  },
}
