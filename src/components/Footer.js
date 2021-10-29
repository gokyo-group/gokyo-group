import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-white.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        {/* overall column system */}
        <div className="container mt-1 mb-1 pt-1 pb-4">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="content has-text-centered columns">
              {/* column with logo */}
              <div className="column is-one-third">
                <img
                  src={logo}
                  alt="Gokyo"
                  style={{ width: '14em', height: '10em' }}
                />
              </div>
              {/* column with the rest */}
              <div className="column is-two-thirds">
                <div className="columns">
                  <div className="column is-4 social">
                    <h2 style={{ color:'#ff0000' }}>Contact us</h2>
                    <p>
                      NEPAL: +977 9801969003
                    </p>
                    <p>
                      AUSTRALIA: + 61 433307656
                    </p>
                    <p>
                      AUSTRALIA: + 61 433938551

                    </p>
                  </div>
                  <div className="column is-4 social">
                    <h2 style={{ color:'#ff0000' }}>Offices</h2>
                    <p>KATHMANDU, NEPAL</p>
                    <p>SYDNEY, AUSTRALIA</p>
                  </div>
                  <div className="column is-4 social">
                    <h2 style={{ color:'#ff0000' }}>Connect with us</h2>
                    <a title="facebook" href="https://facebook.com">
                      <img
                        src={facebook}
                        alt="Facebook"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                    <a title="twitter" href="https://twitter.com">
                      <img
                        className="fas fa-lg"
                        src={twitter}
                        alt="Twitter"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                    <a title="instagram" href="https://instagram.com">
                      <img
                        src={instagram}
                        alt="Instagram"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    )
  }
}

export default Footer
