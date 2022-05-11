import React from "react";

import "./DestinationStyles.css";

import Angkor from "../../assests/angkorwat.jpg"
import KohRong from "../../assests/kohrong.jpg"
import Collosseum from "../../assests/collosseum.jpg"
import Maldvies2 from "../../assests/maldives2.jpg"
import TajMahal from "../../assests/tajmahal.jpg"



function Destinations() {
    return (
        <div className="destinations">
            <div className="container">
                <h1>Top Natural Locations to Visit</h1>
                <p> Wonders of the World</p>
                <div className="img-container">
                    <img className="span-3 image-grid-row-2" src={Angkor} alt="/"/>
                    <img src={TajMahal} alt="/"/>
                    <img src={Collosseum} alt="/"/>
                    <img src={KohRong} alt="/"/>
                    <img src={Maldvies2} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations