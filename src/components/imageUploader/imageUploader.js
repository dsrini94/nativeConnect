import React, { Component } from 'react';

import './imageUploader.css'

//importing semantic-ui elements
import { Grid, TextArea, Form, Input, Button, Modal, Icon, Header  } from 'semantic-ui-react';

export default class ImageUploader extends Component {

  constructor(props){
    super(props);

    this.state = {
      fileName:'',
      submitModal:false
    }
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleOK = this.handleOK.bind(this);
  }

  handleFileChange(e){
    this.setState({fileName:e.target.files[0].name});
  }

  handleModal(){
    this.setState({submitModal:true});
  }

  handleOK(){
    this.setState({submitModal:false});
    this.props.uploadImage();
  }

  render(){
    return(
      <div>
        <br/>
        <h1 className="uploadImageTitle">Upload Image</h1>
        <br/>

      <br/>
        <Grid>

          <Grid.Row>
            <Grid.Column width={6}>
              <center>
              <label for="file-upload" class="custom-file-upload">
                  <i class="fa fa-cloud-upload"></i> Choose a File
              </label>
              <Input id="file-upload" type="file" onChange={this.handleFileChange}/>
            </center>
            </Grid.Column>
            <Grid.Column width={10}>
              <div className="imageName">
                {this.state.fileName}
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6}>
              <center><h2 className="subHeaders">Description</h2></center>
            </Grid.Column>
            <Grid.Column width={10}>
              <Form>
                <TextArea autoHeight placeholder='Description' />
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6}>
              <center><h2 className="subHeaders">Keywords</h2></center>
            </Grid.Column>
            <Grid.Column width={10}>
              <Form>
                <TextArea autoHeight placeholder='Keywords' />
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6}>
              <center><h2 className="subHeaders">Links</h2></center>
            </Grid.Column>
            <Grid.Column width={10}>
              <Form>
                <TextArea autoHeight placeholder='Links' />
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <center><Button primary style={{backgroundColor:"#3b5998"}} onClick={this.handleModal}>Submit</Button></center>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Modal open={this.state.submitModal} basic size='small'>
           <Header icon='checkmark' content='Success' />
           <Modal.Content>
             <Header as="h2" inverted>
               Image has been successfully uploaded to the database.
             </Header>
           </Modal.Content>
           <Modal.Actions>
             <Button color='green' inverted onClick={this.handleOK}>
               <Icon name='checkmark' /> OK
             </Button>
           </Modal.Actions>
         </Modal>

      </div>
    );
  }
}
