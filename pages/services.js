import React, { Component } from 'react';

class Services extends Component {
    render(){
        return(
            <div className="services-page">
                <section>
                <h1>Servicios</h1>
                <div className="services-card">
                <span>
                    <p>Consultation</p>
                </span>
                <span>
                    <p>Design</p>
                </span>
                <span>
                    <p>Renovation</p>
                </span>
                </div>
                <div className="services-card">
                <span>
                    <p>Staging</p>
                </span>
                <span>
                    <p>Deco-Kids</p>
                </span>
                <span>
                    <p>Commercial</p>
                </span>
                </div>
                </section>
                <style jsx>{`
                    .services-page {
                        display: fixed;
						margin: 20vh 5vw;
                        align-items: center;
                        justify-content: center;
                    }
                    .services-page h1 {
                        text-align: center;
                    }
                    .services-page section {
                        flex-direction: row;

                    }
                    .services-card {
                        diplay: flex;
                        flex-direction: row;
                        align-content: space-around;
                        width: 100%;
                        border: 1px solid;
                        // margin: 10px;
                        flex-wrap: wrap;
                    }
                    .services-card span {
                        height: 10vh;
                        width: 10vw;  
                        flex-direction: row;      
                    }
                    `}</style>
                </div>
        )
    }
}

export default Services