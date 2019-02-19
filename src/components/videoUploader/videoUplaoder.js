import React, { Component } from 'react';


//importing semantic-ui elements
import { Grid, TextArea, Form, Input, Button, Icon, Modal, Header  } from 'semantic-ui-react';

export default class VideoUploader extends Component {

  constructor(props){
    super(props);

    this.state = {
      fileName:'',
      modalOpen:false
    }
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOK = this.handleOK.bind(this);
  }

  handleFileChange(e){
    this.setState({fileName:e.target.files[0].name});
  }

  handleSubmit(){
    this.setState({modalOpen:true});
  }

  handleOK(){
    this.setState({modalOpen:false});
    this.props.uploadVideo();
  }

  render(){
    return(
      <div>
        <br/>
        <h1 className="uploadImageTitle">Upload Video</h1>
        <br/>

      <br/>
        <Grid>

          <Grid.Row>
            <Grid.Column width={6}>
              <center>
              <label for="file-upload" className="custom-file-upload">
                  <i className="fa fa-cloud-upload"></i> Choose a File
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
              <center><Button primary style={{backgroundColor:"#3b5998"}} onClick={this.handleSubmit}>Submit</Button></center>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Modal open={this.state.modalOpen} basic size='small'>
           <Header icon='checkmark' content='Success' />
           <Modal.Content>
             <Header as={'h2'} inverted>
               Video has been uploaded successfully
             </Header>
           </Modal.Content>
           <Modal.Actions>
             <Button color='green' inverted onClick={this.handleOK}>
               <Icon name='checkmark' /> Yes
             </Button>
           </Modal.Actions>
         </Modal>
      </div>
    );
  }
}
