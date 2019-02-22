import React, { Component } from 'react';

import { Grid, Image, Button, Header,  Modal } from 'semantic-ui-react'

import Appbar from './../../components/appbar/appbar.js'


export default class ReviewerVerify extends Component {
  render(){
    return(
      <div>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg"/>
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as={'h2'} color='blue'>Pulwama Terror</Header>
              <sapn> All the CRPF soldiers were customers of the Bank under Defence Salary Package where the bank provides insurance of Rupees 30 lacs to each of the defence personnel," the bank said in a statement. "The bank is taking steps to expedite release of insurance money to the next of kin of the martyred soldiers," it added.
  23 soldiers had also availed of loans from SBI and the bank has decided to waive off all the outstanding loans with immediate effect. </sapn>

                <Modal trigger={<Button style={styles.btnAlign}>[More...]</Button>} closeIcon>
                <Modal.Header>Pulwama Terror</Modal.Header>
                <Modal.Content image >
                  <Image style={styles.size} src='https://si.wsj.net/public/resources/images/BN-XR862_IRAQjp_GR_20180301134846.jpg' />
                  <Modal.Description>
                    <p style={{marginRight:40}}>All the CRPF soldiers were customers of the Bank under Defence Salary Package where the bank provides insurance of Rupees 30 lacs to each of the defence personnel," the bank said in a statement. "The bank is taking steps to expedite release of insurance money to the next of kin of the martyred soldiers," it added.
        23 soldiers had also availed of loans from SBI and the bank has decided to waive off all the outstanding loans with immediate effect.</p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <br/> <br />
              <Button  color='red' style={{marginRight:20}}> Reject </Button>
              <Button  color='blue'> Accept </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg"/>
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as={'h2'} color='blue'>Leader's Communication</Header>
              <sapn> "All the CRPF soldiers were customers of the Bank under Defence Salary Package where the bank provides insurance of Rupees 30 lacs to each of the defence personnel," the bank said in a statement. "The bank is taking steps to expedite release of insurance money to the next of kin of the martyred soldiers," it added.
  23 soldiers had also availed of loans from SBI and the bank has decided to waive off all the outstanding loans with immediate effect. </sapn>
              <Modal trigger={<Button style={styles.btnAlign}>[More...]</Button>} closeIcon>
                <Modal.Header>Leader's Communication</Modal.Header>
                <Modal.Content image >
                  <Image style={styles.size} src="https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/17/BostonGlobe.com/Lifestyle/Images/AP6106020131asdfA.jpg" />
                  <Modal.Description>
                    <p style={{marginRight:40}}>All the CRPF soldiers were customers of the Bank under Defence Salary Package where the bank provides insurance of Rupees 30 lacs to each of the defence personnel," the bank said in a statement. "The bank is taking steps to expedite release of insurance money to the next of kin of the martyred soldiers," it added.
              23 soldiers had also availed of loans from SBI and the bank has decided to waive off all the outstanding loans with immediate effect.</p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <br/> <br />
              <Button  color='red' style={{marginRight:20}}> Reject </Button>
              <Button  color='blue'> Accept </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://www.washingtonpost.com/resizer/3tXukf59G1yVDu_C_2W1vcMYIQI=/960x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G2KO7SUUFM6UJFTWUI4WIYOBEE.jpg"/>
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as={'h2'} color='blue'>Barack Obama</Header>
              <sapn> Obama was born on August 4, 1961,[6] at Kapiolani Medical Center for Women and Children in Honolulu, Hawaii. He is the only president who was born in Hawaii[10] and the only president who was born outside of the contiguous 48 states.[11] He was born to a white mother and a black father. His mother, Ann Dunham (1942–1995), was born in Wichita, Kansas; she was mostly of English descent,[12] with some German, Irish, Scottish, Swiss, and Welsh ancestry.[13] His father, Barack Obama Sr. (1936–1982), was a Luo Kenyan man from Nyang'oma Kogelo. Obama's parents met in 1960 in a Russian language class at the University of Hawaii at Manoa, where his father was a foreign student on a scholarship.The couple married in Wailuku, Hawaii, on February 2, 1961, six months before Obama was born.[16][17] </sapn>
              <Modal trigger={<Button style={styles.btnAlign}>[More...]</Button>} closeIcon>
              <Modal.Header>Barack Obama</Modal.Header>
              <Modal.Content image >
                <Image style={styles.size} src="https://www.washingtonpost.com/resizer/3tXukf59G1yVDu_C_2W1vcMYIQI=/960x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G2KO7SUUFM6UJFTWUI4WIYOBEE.jpg" />
                <Modal.Description>
                  <p style={{marginRight:40}}>Obama was born on August 4, 1961,[6] at Kapiolani Medical Center for Women and Children in Honolulu, Hawaii.[7][8][9] He is the only president who was born in Hawaii[10] and the only president who was born outside of the contiguous 48 states.[11] He was born to a white mother and a black father. His mother, Ann Dunham (1942–1995), was born in Wichita, Kansas; she was mostly of English descent,[12] with some German, Irish, Scottish, Swiss, and Welsh ancestry.[13] His father, Barack Obama Sr. (1936–1982), was a Luo Kenyan man from Nyang'oma Kogelo. Obama's parents met in 1960 in a Russian language class at the University of Hawaii at Manoa, where his father was a foreign student on a scholarship.[14][15] The couple married in Wailuku, Hawaii, on February 2, 1961, six months before Obama was born.[16][17].</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
              <br/> <br />
              <Button  color='red' style={{marginRight:20}}> Reject </Button>
              <Button  color='blue'> Accept </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://www.channelone.com/wp-content/uploads/2008/08/uspresidents-555x370.jpg"/>
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as={'h2'} color='blue'>Rock Images</Header>
              <sapn> Sandstone is a sedimentary rock composed of sand-size grains of mineral, rock, or organic material. It also contains a cementing material that binds the sand grains together and may contain a matrix of silt- or clay-size particles that occupy the spaces between the sand grains.
Sandstone is one of the most common types of sedimentary rock and is found in sedimentary basins throughout the world. It is often mined for use as a construction material or as a raw material used in manufacturing. In the subsurface, sandstone often serves as an aquifer for groundwater or as a reservoir for oil and natural gas. </sapn>
              <Modal trigger={<Button style={styles.btnAlign}>[More...]</Button>} closeIcon>
              <Modal.Header>Rock Images</Modal.Header>
              <Modal.Content image >
                <Image style={styles.size} src="https://www.channelone.com/wp-content/uploads/2008/08/uspresidents-555x370.jpg" />
                <Modal.Description>
                  <p style={{marginRight:40}}>Sandstone is a sedimentary rock composed of sand-size grains of mineral, rock, or organic material. It also contains a cementing material that binds the sand grains together and may contain a matrix of silt- or clay-size particles that occupy the spaces between the sand grains.
Sandstone is one of the most common types of sedimentary rock and is found in sedimentary basins throughout the world. It is often mined for use as a construction material or as a raw material used in manufacturing. In the subsurface, sandstone often serves as an aquifer for groundwater or as a reservoir for oil and natural gas.</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
              <br/> <br />
              <Button  color='red' style={{marginRight:20}}> Reject </Button>
              <Button  color='blue'> Accept </Button>
            </Grid.Column>
          </Grid.Row>
          </Grid>
      </div>
    );
  }
}

const styles = {
  size:{
    height:300,
    width:250,
  },
  btnAlign:{
    color:'#2185d0',backgroundColor:'transparent', padding:0
  }
}
