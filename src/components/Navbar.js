import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      // <container>
        <nav
          className="navbar has-background-dark"
          role="navigation"
          aria-label="main-navigation"
        > 
          <div className="container">
            {/* navbar brand */}
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Gokyo" style={{ width: '160px' }} />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-end has-text-left">
                <Link className="navbar-item" to="/">
                  Home
                </Link>
                <Link className="navbar-item" to="/about">
                  About Us
                </Link>
                <Link className="navbar-item has-dropdown is-hoverable" to="/products">
                  <a class="navbar-link">
                    Services
                  </a>
                  <div class="navbar-dropdown has-text-centered">
                    <Link className="navbar-item" to="/projectmanagement">
                      Project Management
                    </Link>
                    <hr class="navbar-divider"/>
                    <Link className="navbar-item" to="/construction">
                      Construction
                    </Link>
                    <hr class="navbar-divider"/>
                    <Link className="navbar-item" to="/design">
                      Design
                    </Link>
                    <hr class="navbar-divider"/>
                    <Link className="navbar-item" to="/remedial">
                      Remedial
                    </Link>
                    <hr class="navbar-divider"/>
                    <Link className="navbar-item" to="/facilitiesmanagement">
                      Building and Facilities Management
                    </Link>
                    <hr class="navbar-divider"/>
                    <Link className="navbar-item" to="/valuation">
                      Valuation
                    </Link>
                  </div>
                </Link>
                <Link className="navbar-item has-dropdown is-hoverable" to="/products">
                  <a class="navbar-link">
                  Portfolio
                  </a>
                  <div class="navbar-dropdown has-text-centered">
                    <Link className="navbar-item" to="/projectmanagement">
                      Future Projects
                    </Link>
                    <hr class="navbar-divider"/>
                    <Link className="navbar-item" to="/construction">
                      Gallery
                    </Link>
                    <hr class="navbar-divider"/>
                    <Link className="navbar-item" to="/design">
                      Project List
                    </Link>
                  </div>
                </Link>
                {/* <Link className="navbar-item" to="/contact">
                  <button class="button is-warning">Contact</button>
                </Link> */}

                {/* this is commented because we dont need this right now, 
                this has link to the contact and upload page */}

                {/* <Link className="navbar-item" to="/contact/examples">
                  Form Examples
                </Link> */}

              </div>
              {/* <div className="navbar-end has-text-centered">
                <a
                  className="navbar-item"
                  href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={github} alt="Github" />
                  </span>
                </a>
              </div> */}
            </div>
          </div>
        </nav>
      // </container>
    )
  }
}

export default Navbar;
