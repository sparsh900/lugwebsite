import React, { Component } from 'react';
import ls from 'local-storage';
import axios from 'axios';
const port = "http://localhost:5000"

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        //this.onChangeName = this.onChangeName.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    componentDidMount(){
        if(!ls.get("user")){
            window.location="/"
            alert('you are not a member of society')
            
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        axios.post("/imageupload/user-profile", formData, {
        }).then(res => {
            console.log(res)
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
