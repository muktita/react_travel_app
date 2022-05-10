import React from "react";

import "./DestinationStyles.css";

import BoraBora from "../../assests/borabora.jpg"
import BoraBora2 from "../../assests/borabora2.jpg"
import Maldives from "../../assests/maldives.jpg"
import Maldvies2 from "../../assests/maldives2.jpg"
import KeyWest from "../../assests/keywest.jpg"


function Destinations() {
    return (
        <div className="destinations">
            <div className="container">
                <h1> All Inclusive Resorts</h1>
                <p> On the Carribean's Best Beaches</p>
                <div className="img-container">
                    <img src={BoraBora} alt="/"/>
                    <img src={BoraBora2} alt="/"/>
                    <img src={Maldives} alt="/"/>
                    <img src={Maldvies2} alt="/"/>
                    <img src={KeyWest} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations