import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

export default class HomePageModal extends React.Component {
  state = {
    isModal: true,
  };

  handleClick = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  render() {
    const active = this.state.isModal ? "is-active" : "";
    return (
      <div className="App">
        <div className={`modal ${active}`}>
          <div className="modal-background" onClick={this.handleClick} />
          <div className="modal-content has-text-centered">
            <header></header>
            <button
              onClick={this.handleClick}
              className="delete"
              aria-label="close"
            />
            {/* <div className="is-offset-one-quarter homepage-main">
              <img
                src={
                  !!this.props.groupLogo.image.childImageSharp
                    ? this.props.groupLogo.image.childImageSharp.fluid.src
                    : this.props.groupLogo.image
                }
                style={{ maxWidth: "100%", margin: "auto", display: "block" }}
              />
            </div> */}
            <p>Welcome to Gokyo Group. Please make a selection to continue.</p>
            <div className="columns is-centered">
              <div
                className="column is-half"
                onClick={this.handleClick}
              >
                <img
                  src={
                    !!this.props.constructionLogo.image.childImageSharp
                      ? this.props.constructionLogo.image.childImageSharp.fluid
                          .src
                      : this.props.constructionLogo.image
                  }
                  style={{ maxWidth: "100%", margin: "auto", display: "block" }}
                />
              {/* </div>
              <div
                className="column is-half"
                onClick={this.props.realEstateRoute}
              > */}
                <img
                  src={
                    !!this.props.realEstateLogo.image.childImageSharp
                      ? this.props.realEstateLogo.image.childImageSharp.fluid
                          .src
                      : this.props.realEstateLogo.image
                  }
                  style={{ maxWidth: "100%", margin: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}