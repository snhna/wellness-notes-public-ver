import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import img1 from "../../images/5SOS_1.png";
import img2 from "../../images/5SOS_2.png";
import img3 from "../../images/5SOS_3.jpg";
import img4 from "../../images/5SOS_4.jpg";
import img5 from "../../images/5SOS_5.jpg";

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 100,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
  {
    key: "1",
    content: <img src={img1} alt="5SOS Album Cover 1" />
  },
  {
    key: "2",
    content: <img src={img2} alt="5SOS Album Cover 2" />
  },
  {
    key: "3",
    content: <img src={img3} alt="5SOS Album Cover 3" />
  },
  {
    key: "4",
    content: <img src={img4} alt="5SOS Album Cover 4" />
  },
  {
    key: "5",
    content: <img src={img5} alt="5SOS Album Cover 5" />
  }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "100%", height: "175px"}}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        </div>
    );
  }
}