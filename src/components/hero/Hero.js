import React from "react";
import "./HeroStyles.css";
import {AiOutlineSearch} from "react-icons/ai";
import Video from "../../assests/maldivesVideo.mp4"


function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>First Class Travel</h1>
                <h2>Top 1% Location Worldwide</h2>
                <form className="form">
                    <div><input type="text" placeholder="Search Destinations"></input>
                    </div>
                    <div>
                        <button><AiOutlineSearch className="icon"/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Hero