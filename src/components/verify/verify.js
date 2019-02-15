import React, { Component } from 'react';

import { TextArea, Input, Grid, Button } from 'semantic-ui-react';

import Appbar from './../../components/appbar/appbar.js'

import './verify.css';

export default class NewsCard extends Component {
  render(){
    return(
      <Grid padded divided>

        <Grid.Row>
          <Grid.Column>
            <center>  <h1 className="subHeaders">Verify Article</h1></center>
            <br/>
            <br/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
          <center>
             <h1 className="subHeaders1">Summary</h1>
             <TextArea rows={7} autoHeight placeholder='Try adding multiple lines'  style={{width:400}}/>
             <br/>
             <br/>
             <Button primary>Previously Verified</Button>
           </center>
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
