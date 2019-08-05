import React from 'react';
import App, { Container } from 'next/app';
import NavBar from './navBar';
import css from "../index.css";
import 'bootstrap/dist/css/bootstrap.css';


class MyApp extends App {

	// componentDidMount() {
	// 	window.addEventListener("scroll", this.resizeHeaderOnScroll);
	// }

	// resizeHeaderOnScroll() {
	// 	const distanceY = window.pageYOffset || document.documentElement.scrollTop,
	// 		shrinkOn = 80	,
	// 		header = document.getElementById("navbar"),
	// 		logo = document.getElementById("logo-mercedes-grossmann")
	// 	//   orbisLogoShrunk = document.getElementById("orbis-logo-shrunk")


	// 	if (distanceY > shrinkOn) {
	// 		header.classList.add("navbar-smaller");
	// 		header.classList.remove("navbar");
	// 		logo.classList.add("logo-small");
	// 		logo.classList.remove("logo-big");

	// 	//   orbisLogoShrunk.style.visibility = "visible"
	// 	} else {
	// 		header.classList.add("navbar");
	// 		header.classList.remove("navbar-smaller");
	// 		logo.classList.add("logo-big");
	// 		logo.classList.remove("logo-small");

	// 	//   orbisLogoShrunk.style.visibility = "hidden"

	// 	}
	// }

    render(){
    const { Component, pageProps } = this.props;
        return(
            <div className="app">
                <Container>
					<NavBar></NavBar>
					<Component {...pageProps} />
                </Container>
            </div>
        )
    }
};

export default MyApp 