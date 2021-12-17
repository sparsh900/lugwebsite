import React, { Component } from 'react';
import axios from 'axios';
import Gallery from './Gallery'
// base url of API
const BASE_URL = 'http://localhost:5000/';
const port = "http://localhost:5000";

class Imageupload extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      imageUrl: null, // to store uploaded image path
      name: null,
      desc: null

    };
  }

  // handle change event of input file
  onChangeFile = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }
  onChangeName = event => {
    this.setState({ name: event.target.value })
  }
  onChangeDesc = event => {
    this.setState({ desc: event.target.value })
  }




  // handle click event of the upload button
  handleUpload = () => {
    const { selectedFile } = this.state;
    /*if (!selectedFile) {
      this.setState({
        handleResponse: {
          isSuccess: false,
          message: "Please select image to upload."
        }
      });
      return false;
    }*/
    const formData = new FormData();
    formData.append('dataFile', selectedFile, selectedFile.name);
    /*axios.post(BASE_URL + 'uploadfile', formData).then(response => {
      this.setState({
        handleResponse: {
          isSuccess: response.status === 200,
          message: response.data.message
        },
        imageUrl: BASE_URL + response.data.file.path
      });
      alert(this.state.imageUrl);
    }).catch(err => {
      alert(err.message);
    });*/
    axios.post('/uploadfile', formData)
    window.location = '/';
  }

  render() {
    const { handleResponse, imageUrl } = this.state;
    return (
      <div className="App" >
        <h4>Image Upload in ReactJS - Clue Mediator</h4>
        <p className="title">Select Image:</p>
        <div style={{ marginBottom: 10 }}>
        <input type="text" onChange={this.onChangeName} />
        <input type="text" onChange={this.onChangeDesc} />
          <input type="file" onChange={this.onChangeFile} />
          <input type="button" value="Upload" onClick={this.handleUpload} />
        </div>


      </div>
    );
  }
}

export default Imageupload;
/*<input type="button" value="Upload" onClick={this.handleUpload} />
{handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}

<p className="title" style={{ marginTop: 30 }}>Uploaded Image:</p>
{imageUrl && <img src={imageUrl} alt="Uploaded File" height="100" width="100" />}*/
