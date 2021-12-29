import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { graphql, StaticQuery } from 'gatsby'
import "./slider.sass";

class SlickImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageListId:this.props.imageListId,
      data:this.props.data.allImageSharp.edges
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount()
  {
    this.setState(( state, props )=>{
      return {
        //images: ["http://placekitten.com/g/400/200","/img/chemex.jpg"],
        //imageListId: this.props.imageListId,
        //data: this.props.data.allImageSharp.edges
      };
    });
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="sliderContainer">
        {this.state.data!=null&&
          <div>
          <Slider ref={c => (this.slider = c)} {...settings}>
          {this.state.data.map((edge)=>{
              if(((edge.node.fluid.src).split('/').pop()).includes(this.state.imageListId.toString())){
              return(<div>
                <img src={edge.node.fluid.src} />
              </div>);}
          })}
          </Slider>
          </div>
        }
      </div>
    );
  }
}

export default (imageListId) => (
  <StaticQuery
    query={graphql`
      query SlickImageSliderQuery {
          allImageSharp(filter: {fixed: {src: {regex: "/[0-9]-[a-z]/"}}}) {
            edges {
              node {
                id
                fluid (maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
    `}
    render={(data, count) => <SlickImageSlider imageListId={imageListId.imageListId} data={data} count={count} />}
  />
)

