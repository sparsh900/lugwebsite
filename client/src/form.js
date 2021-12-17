import React, { Component } from 'react';
import Gallery from './Gallery'
// base url of API
/*const BASE_URL = 'http://localhost:5000/';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    //this.onChangeNo = this.onChangeNo.bind(this);
    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      imageUrl: null, // to store uploaded image path
      //number: null
    };
  }

  // handle change event of input file
  onChangeFile = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }
  /*onChangeNo(e) {
    this.setState({
      number: e.target.value
    })
    axios.post('http://localhost:5000/number', this.state.number);
  }*/

  // handle click event of the upload button
  /*handleUpload = () => {
    const { selectedFile } = this.state;
    if (!selectedFile) {
      this.setState({
        handleResponse: {
          isSuccess: false,
          message: "Please select image to upload."
        }
      });
      return false;
    }
    const formData = new FormData();
    formData.append('dataFile', selectedFile, selectedFile.name);
    axios.post(BASE_URL + 'uploadfile', formData).then(response => {
      this.setState({
        handleResponse: {
          isSuccess: response.status === 200,
          message: response.data.message
        },
        imageUrl: BASE_URL + response.data.file.path
      });
    }).catch(err => {
      alert(err.message);
    });

    //axios.post('http://localhost:5000/number', number);
    window.location = '/';
  }

  render() {
    const { handleResponse, imageUrl } = this.state;
    return (
      <div className="App" >
        <h4>Image Upload in ReactJS - Clue Mediator</h4>

        <p className="title">Select Image:</p>
        <div style={{ marginBottom: 10 }}>
        //<input type="number" onChange={this.onChangeNo} />
          <input type="file" onChange={this.onChangeFile} />

        </div>
        <input type="button" value="Upload" onClick={this.handleUpload} />
        {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}

        <p className="title" style={{ marginTop: 30 }}>Uploaded Image:</p>
        {imageUrl && <img src={imageUrl} alt="Uploaded File" height="100" width="100" />}
        <Gallery imageu = {this.state.imageurl} />
      </div>
    );
  }
}*/
//----------------------------------------------------------------------

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    window.location = '/';
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
          <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
        </form>
        {$imagePreview}
        <Gallery imageurl={this.state.imagePreviewUrl} />
      </div>

    )
  }

}

export default ImageUpload;
