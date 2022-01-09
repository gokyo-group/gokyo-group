import React from 'react'
import { navigate } from 'gatsby-link'
import LayoutRealEstate from '../../components/LayoutRealEstate'
import facebook from '../../img/social/facebook.svg'
import instagram from '../../img/social/instagram.svg'
import twitter from '../../img/social/twitter.svg'
import linkedin from '../../img/social/linkedin.svg'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <LayoutRealEstate>
        {/* <section className="section">
          <div className="container">
            <div className="columns is-variable is-7">
              <div className="column is-two-fifths" 
                style={{
                // backgroundImage: `url("/img/customer.jpg")`,
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
                backgroundPosition: "center bottom",
                backgroundColor:"rgba(255, 255, 255, 0.8)",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              >
                  <div className="content is-normal has-text-centered"
                  style={{backgroundColor:"rgba(255, 255, 255, 0.8)", borderRadius: "25px"}}>
                    <h3>
                      Hello there, please send us any questions, comments,
                      or enquiry. We will try to get back to you as soon as possible.
                    </h3>
                    <p>{' '}</p>
                  </div>
              </div>
              <div className="column">
                <div className="container">
                  <div className="content">
                    <h1>Contact Us</h1>
                    <form
                      name="contact"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}
                    > */}
                      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                      {/* <input type="hidden" name="form-name" value="contact" />
                      <div hidden>
                        <label>
                          Don’t fill this out:{' '}
                          <input name="bot-field" onChange={this.handleChange} />
                        </label>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'name'}>
                          Your name
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'name'}
                            onChange={this.handleChange}
                            id={'name'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'email'}>
                          Email
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'email'}
                            name={'email'}
                            onChange={this.handleChange}
                            id={'email'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'message'}>
                          Message
                        </label>
                        <div className="control">
                          <textarea
                            className="textarea"
                            name={'message'}
                            onChange={this.handleChange}
                            id={'message'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <button className="button is-link" type="submit">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light has-text-centered">
                Sell Request form 
              </h1>
              <h1 className="is-size-4"> Please provide us with your property details,
              and we will give you a call back.</h1>
              <hr/>
              <div className="columns is-8 is-variable ">

                <div className="column has-text-left">
                <form
                      name="sell_request"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}
                    >
                  <div className="columns">
                    <div className="field column is-one-third">
                      <label className="label">Name</label>
                      <div className="control">
                        <input 
                          className="input is-medium"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                          />
                      </div>
                    </div>
                    <div className="field column">
                      <label className="label">Phone</label>
                      <div className="control">
                        <input className="input is-medium" 
                          type={'tel'}
                          name={'tel'}
                          onChange={this.handleChange}
                          id={'tel'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field column">
                      <label className="label">Email</label>
                      <div className="control">
                        <input className="input is-medium"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="columns">
                    <div className="field column is-one-third">
                      <label className="label">Location</label>
                      <div className="control">
                        <input 
                          className="input is-medium"
                          type={'text'}
                          name={'location'}
                          onChange={this.handleChange}
                          id={'location'}
                          />
                      </div>
                    </div>
                    <div className="field column">
                      <label className="label">Property Type (house/land)</label>
                      <div className="control">
                        <input 
                          className="input is-medium"
                          type={'text'}
                          name={'type'}
                          onChange={this.handleChange}
                          id={'type'}
                          required={true}
                          />
                      </div>
                    </div>
                    <div className="field column">
                      <label className="label">Property Size (aanas/ropanis)</label>
                      <div className="control">
                        <input 
                          className="input is-medium"
                          type={'text'}
                          name={'size'}
                          onChange={this.handleChange}
                          id={'size'}
                          />
                      </div>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="field column is-one-third">
                      <label className="label">number of bedroom (Optional)</label>
                      <div className="control">
                        <input 
                          className="input is-medium"
                          type={'text'}
                          name={'bedroom'}
                          onChange={this.handleChange}
                          id={'bedroom'}
                          />
                      </div>
                    </div>
                    <div className="field column">
                      <label className="label">number of bathroom (Optional)</label>
                      <div className="control">
                        <input 
                          className="input is-medium"
                          type={'text'}
                          name={'bathroom'}
                          onChange={this.handleChange}
                          id={'bathroom'}
                          />
                      </div>
                    </div>
                    <div className="field column">
                      <label className="label">number of floors (Optional)</label>
                      <div className="control">
                        <input 
                          className="input is-medium"
                          type={'text'}
                          name={'floor'}
                          onChange={this.handleChange}
                          id={'floor'}
                          />
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Year built (Optional)</label>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type={'text'}
                        name={'year'}
                        onChange={this.handleChange}
                        id={'year'}
                        />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea 
                        className="textarea"
                        name={'message'}
                        onChange={this.handleChange}
                        id={'message'}
                      >
                      </textarea>
                    </div>
                  </div>
                  <div className="control">
                    <button type="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium">Request Call back</button>
                  </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </LayoutRealEstate>
    )
  }
}
