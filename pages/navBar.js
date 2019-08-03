import React, {Component} from 'react';
import  Link  from 'next/link';

class NavBar extends Component {

	componentDidMount() {
		window.addEventListener("scroll", this.resizeHeaderOnScroll);
	}

	resizeHeaderOnScroll() {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 80	,
			header = document.getElementById("navbar"),
			logo = document.getElementById("logo-mercedes-grossmann")
		//   orbisLogoShrunk = document.getElementById("orbis-logo-shrunk")


		if (distanceY > shrinkOn) {
			header.classList.add("navbar-smaller");
			header.classList.remove("navbar");
			logo.classList.add("logo-small");
			logo.classList.remove("logo-big");

		//   orbisLogoShrunk.style.visibility = "visible"
		} else {
			header.classList.add("navbar");
			header.classList.remove("navbar-smaller");
			logo.classList.add("logo-big");
			logo.classList.remove("logo-small");

		//   orbisLogoShrunk.style.visibility = "hidden"

		}
	}

	render(){

			return (
				<div className="nav">

				<div id="navbar" className="navbar">
				<a href="/index" id="nav-links">Services</a>
				<a href="/index" id="nav-links">Projects</a>
				<img id="logo-mercedes-grossmann" className="logo-big" src="https://i.dlpng.com/static/png/173886_preview.png" alt="logo"></img>
				<a href="/index" id="nav-links" >Work</a>
				<a href="/index" id="nav-links" >Work</a>

		<style jsx>{`
		@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
			.nav {
				margin-bottom: 50px;
			}
			.navbar {
					height: 20vh;
					background-color: #333333 ;
					box-sizing: border-box;
					position: fixed;
					border-bottom: solid 5px #D4145A;
					width: 100%;
					top: 0;
					display: flex;
					justify-content: space-around;
					align-items: center;
					text-decoration: none;
					font-size: 150%;
					font-color: red;
					
			};
			.navbar-smaller {
				height: 12vh;
				background-color: #333333 ;
				box-sizing: border-box;
				position: fixed;
				border-bottom: solid 5px #D4145A;
				width: 100%;
				top: 0;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin: 0px;

			};

			#nav-links {
					color: white;
					padding: 10px;
					font-family: 'Montserrat bold', sans-serif;
					font-size: 4vh;
					text-decoration: none;

			};
			#nav-links: hover {
				text-decoration: underline;
				font-color: red;
			}

			.logo-small {
					height: 10vh;
			};

			.logo-big {
				height: 20vh;
			};

			@media (max-width: 600px) {
			div {
					background: blue;
			}
			};
		`}</style>

		</div>
		</div>

        )
    }
    
}

export default NavBar