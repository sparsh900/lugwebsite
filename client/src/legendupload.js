import React, { Component } from 'react';
import ls from 'local-storage';
import axios from 'axios';
const port = "http://localhost:5000"
export default class LegendUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: '',
            name: '',
            number: '',
            desc: ''
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
    onChangeNumber(e) {
        this.setState({ number: e.target.value })
    }
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeDesc(e) {
        this.setState({ desc: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault();
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        formData.append('number', this.state.number)
        formData.append('name', this.state.name)
        formData.append('desc', this.state.desc)
        /*const number = this.state.number;
        const name = this.state.name;
        const desc = this.state.desc;*/
        axios.post("/legendupload/user-profile", formData).then(res => {
            console.log(res)
        })

        /*const legend ={
          number: this.state.number,
          name: this.state.name,
          desc: this.state.desc
        }
        axios.post('http://localhost:5000/legendupload/legend', legend)
          .then(res => console.log(res.data));*/
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="number" onChange={this.onChangeNumber} />
                            <input type="text" onChange={this.onChangeName} />
                            <input type="text" onChange={this.onChangeDesc} />
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
