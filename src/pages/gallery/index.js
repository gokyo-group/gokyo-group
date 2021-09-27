import React, { Component } from 'react'
import Layout from '../../components/Layout'

export default class index extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            slideIndex:1
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        this.showSlides = this.showSlides.bind(this);

        
    }
    componentDidMount() {
        this.showSlides(this.state.slideIndex);
    }



    openModal() {
        document.getElementById('myModal').style.display = "block";
    }
      
    closeModal() {
    document.getElementById('myModal').style.display = "none";
    }
    
    plusSlides(n) {
        this.setState({
            slideIndex:this.state.slideIndex+n
        });
    }
    
    currentSlide(n) {
        this.setState({
            slideIndex:n
        });
        this.showSlides(n);
    }
    
    showSlides(n) {
    var i;
        var slides = document.getElementsByClassName("item-slide");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {
            this.setState({
                slideIndex:1
            });
        }
        if (n < 1) {
            this.setState({
                slideIndex:slides.length
            });
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.state.slideIndex-1].style.display = "block";
    }

    render() {
        return (
            <Layout>
                <section className="section section--gradient"
                // style={{
                //   backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/8/89/Eye%27s_of_Buddha.jpg")`,
                //   backgroundRepeat: "no-repeat",
                //   backgroundSize: "cover",
                //   backgroundPosition: "center bottom",
                //   backgroundOpacity:'0.5'
                // }}
                >
                        <div className="columns">
                        <div className="column is-12">
                            
                            <h1 className="title is-size-2 has-text-weight-bold is-bold-light has-text-centered">
                                Gallery
                            </h1>
            {/* <section className="section section--gradient"> */}
            <div className="container has-text-centered">
                <div className="container is-fluid">
                    <div className="columns">
                        <div className="column">
                            <img src="https://source.unsplash.com/800x1000/?construction" onClick={()=>{this.openModal();this.currentSlide(1)}}/>
                            <img src="https://source.unsplash.com/800x550/?construction" onClick={()=>{this.openModal();this.currentSlide(4)}}/>
                        </div>
                        <div className="column">
                            <img src="https://source.unsplash.com/800x600/?construction" onClick={()=>{this.openModal();this.currentSlide(2)}}/>
                            <img src="https://source.unsplash.com/800x650/?construction" onClick={()=>{this.openModal();this.currentSlide(5)}}/>
                        </div>
                        <div className="column">
                            <img src="https://source.unsplash.com/800x900/?construction" onClick={()=>{this.openModal();this.currentSlide(3)}}/>
                            <img src="https://source.unsplash.com/800x700/?construction" onClick={()=>{this.openModal();this.currentSlide(6)}}/>
                        </div>
                    </div>

                    <div className="modal" id="myModal">
                        <div className="modal-content is-vcentered">
                        <div className="item-slide">
                            <img src="https://source.unsplash.com/800x1000/?construction"/>
                        </div>
                        <div className="item-slide">
                            <img src="https://source.unsplash.com/800x600/?construction"/>
                        </div>
                        <div className="item-slide">
                            <img src="https://source.unsplash.com/800x900/?construction"/>
                        </div>
                        <div className="item-slide">
                            <img src="https://source.unsplash.com/800x550/?construction"/>
                        </div>
                        <div className="item-slide">
                            <img src="https://source.unsplash.com/800x650/?construction"/>
                        </div>
                        <div className="item-slide">
                            <img src="https://source.unsplash.com/800x700/?construction"/>
                        </div>
                        </div>
                        <a className="prev" onClick={()=>{this.plusSlides(-1)}}>&#10094;</a>
                        <a className="next" onClick={()=>{this.plusSlides(1)}}>&#10095;</a>
                        <button onClick={this.closeModal} className="modal-close is-large" aria-label="close"></button>
                    </div>
                </div>

                </div>
                </div>
                </div>
                
                
            </section>
            </Layout>
        )
    }
}
