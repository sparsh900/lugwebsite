import React, { Component } from "react";
import Asset from "./images/Asset.png";
import l1 from "./images/l1.jpeg";
import l2 from "./images/l2.jpeg";
import l3 from "./images/l3.jpeg";
import l4 from "./images/l4.jpeg";
import l5 from "./images/l5.jpeg";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.css";
import "./style.css";
import { Carousel } from "react-responsive-carousel";
import Sample from "./images/poster.jpg";
const BASE_URL = "http://localhost:5000/";
const port = "http://localhost:5000";
const Legend = (props) => (
  <div className="efg">
    <img
      className="carousel circle"
      src={props.legendupload.profileImg}
      alt="abc"
    />
    <div className="legend top">legend {props.legendupload.number}</div>
    <div className="legend top">{props.legendupload.name}</div>
    <div className="legend"> {props.legendupload.desc}</div>
  </div>
);
class DemoCarousel extends Component {
  constructor(props) {
    super(props);
    //this.onChangeNo = this.onChangeNo.bind(this);
    this.state = {
      // handle the API response
      /*imagelegendUrl1: null,
      imagelegendUrl2: null,
      imagelegendUrl3: null,
      imagelegendUrl4: null,
      imagelegendUrl5: null,
      imagelegendUrl6: null// to store uploaded image path
      //number: null*/
      legends: [],
    };
  }
  componentDidMount() {
    axios
      .get("/legendupload/")
      .then((response) => {
        this.setState({
          legends: response.data.legenduploads,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  legendList() {
    return this.state.legends.map((legend) => {
      return <Legend legendupload={legend} />;
    });
  }
  render() {
    //const {imagelegendUrl1, imagelegendUrl2, imagelegendUrl3, imagelegendUrl4, imagelegendUrl5, imagelegendUrl6} = this.state;
    //const {images} = this.state;
    return (
      <div className="back-carousel" id="member-gallery">
        <div className="header-carousel">EXECUTIVE TEAM</div>
        <div className="box-carousel">
          <Carousel
            autoPlay={true}
            stopOnHover={true}
            infiniteLoop={true}
            transitionTime="300"
            centerMode={true}
            centerSlidePercentage="33.33"
            interval="1500"
            showThumbs={false}
          >
            {/*this.legendList()*/}
            <div className="efg">
                 <img className="carousel circle" src={l1} alt="abc" />
                 <div className="legend top">legend 1</div>
                 <div className="legend top">Jatin Kundra</div>
                 <div className="legend">General Secretary</div>
            </div>
            <div className="efg">
                 <img className="carousel circle" src={l2} alt="abc" />
                 <div className="legend top">legend 2</div>
                 <div className="legend top">Raghav Wadhwa</div>
                 <div className="legend">Joint Gen-Sec</div>
            </div>
            <div className="efg">
                 <img className="carousel circle" src={l3} alt="abc" />
                 <div className="legend top">legend 3</div>
                 <div className="legend top">Chahat Gandhi</div>
                 <div className="legend">Tech - Lead</div>
            </div>
            <div className="efg">
                 <img className="carousel circle" src={l4} alt="abc" />
                 <div className="legend top">legend 4</div>
                 <div className="legend top">Jaiwant</div>
                 <div className="legend">Administrative Head</div>
            </div>
            <div className="efg">
                 <img className="carousel circle" src={l5} alt="abc" />
                 <div className="legend top">legend 5</div>
                 <div className="legend top">Shiv Thavani</div>
                 <div className="legend">Member</div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default DemoCarousel;
