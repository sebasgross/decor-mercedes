import React, { Component } from 'react';

class Services extends Component {
    render(){
        return(
            <div className="services-page">
                <section>
                <h1>Servicios</h1>
                <div className="services-card">
                <span>
                    <h3>Consultation</h3>
                </span>
                <span>
                    <h3>Design</h3>
                </span>
                <span>
                    <h3>Renovation</h3>
                </span>
                </div>
                <div className="services-card">
                <span>
                    <h3>Staging</h3>
                </span>
                <span>
                    <h3>Deco-Kids</h3>
                </span>
                <span>
                    <h3>Commercial</h3>
                </span>
                </div>
                </section>
                <style jsx>{`
                    .services-page {
                        display: fixed;
                        margin-top: 25vh;
                        align-items: center;
                    }
                    .services-page section {
                        flex-direction: row;

                    }
                    .services-card {
                        diplay: flex;
                        flex-direction: row;
                        // margin: 10px;
                        flex-wrap: wrap;
                    }
                    `}</style>
                </div>
        )
    }
}

export default Services