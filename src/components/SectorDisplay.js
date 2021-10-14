import React from 'react'
import health from '../img/icons/health-sector.png'
import education from '../img/icons/education-sector.png'
import commercial from '../img/icons/commercial-sector.png'
import residential from '../img/icons/residential-sector.png'
import retail from '../img/icons/retail-sector.png'
import community from '../img/icons/community-sector.png'

export default function SectorDisplay() {
    return (
        <section className="section section--gradient">
            <div className="container">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light has-text-centered">
                    Sectors
                </h1>
                <div className="columns is-mobile">
                    <div className="column has-text-centered">
                        <img 
                            src={residential}
                            style={{ width: '5em', height: '5em' }}
                        />
                        <p>RESIDENTIAL</p>
                    </div>
                    <div className="column has-text-centered">
                        <img 
                            src={health}
                            style={{ width: '5em', height: '5em' }}
                        />
                        <p>HEALTH</p>
                    </div>
                    <div className="column has-text-centered">
                        <img 
                            src={retail}
                            style={{ width: '5em', height: '5em' }}
                        />
                        <p>RETAIL</p>
                    </div>
                </div>
                <div className="columns is-mobile">
                    <div className="column has-text-centered">
                        <img 
                            src={commercial}
                            style={{ width: '5em', height: '5em' }}
                        />
                        <p>COMMERCIAL</p>
                    </div>
                    <div className="column has-text-centered">
                        <img 
                            src={education}
                            style={{ width: '5em', height: '5em' }}
                        />
                        <p>EDUCATION</p>
                    </div>
                    <div className="column has-text-centered">
                        <img 
                            src={community}
                            style={{ width: '5em', height: '5em' }}
                        />
                        <p>COMMUNITY</p></div>
                </div>
            </div>
        </section>
    )
}
