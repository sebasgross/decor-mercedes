import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Portfolio extends Component {
    state = {
		}
			render() {

				return (
					<div className="portfolio-page">
						<h1>Portfolio</h1>
							<div>
								<h4>Title of Portfolio</h4>
									<Carousel>
										<Carousel.Item>
										<img
											className="d-block w-100"
											src="http://hdwpro.com/wp-content/uploads/2016/12/Awesome-HD-Pic.jpg"
											alt="First slide"
											id="portfolio-pics"
										/>
										<Carousel.Caption>
     									 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
										</Carousel.Item>
										<Carousel.Item>
										<img
											className="d-block w-100"
											src="http://hdwpro.com/wp-content/uploads/2016/12/Awesome-HD-Pic.jpg"
											alt="First slide"
											id="portfolio-pics"
										/>
										<Carousel.Caption>
     									 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
										</Carousel.Item>
                    </Carousel>
										<span>Date</span>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</div>
							<style jsx>{`
							@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

							.portfolio-page {
								// margin-top: 20vh;
								margin: 20vh 5vw;
								font-family: 'Montserrat bold', sans-serif;
							},
							.portfolio-page h1 {
								margin: 0;
							}
							#portfolio-pics{
								height: 30vh;
								width: 20vw;
							}
							`}</style>
						</div>
            )
        }
    }

export default Portfolio