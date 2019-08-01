import React from 'react';
import App, { Container } from 'next/app';
// import NavBar from '../src/components/NavBar'
import '../src/index.css';

class MyApp extends App {
    render(){
        return(
            <div>
                
                <div className="navbar">
					{/* <a href="" className="nav-links">Home</a> */}
						<p className="nav-links">About</p>
						<p className="nav-links">Projects</p>
                        <img id="logo-mercedes-grossmann" src="https://i.dlpng.com/static/png/173886_preview.png" alt="logo"></img>
						<p className="nav-links" >Work</p>
						<p className="nav-links" >Work</p>

				</div>
                <style jsx>{`

                    .navbar {
                        height: 25vh;
                        background-color: #333333 ;
                        box-sizing: border-box;
                        position: fixed;
                        border-bottom: solid 5px #D4145A;
                        width: 100%;
                        top: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        

                    }
                    .navbar p {
                        color: white;
                        padding: 10px;
                    }
                    #logo-mercedes-grossmann {
                        height: 10vh;
                    }
                    @media (max-width: 600px) {
                    div {
                        background: blue;
                    }
                    }
                `}</style>
            </div>
        )
    }
};

export default MyApp 