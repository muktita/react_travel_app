import React from "react";
import "./selectStyles.css"

import Angkor from "../../assests/angkorwat.jpg"
import KohRong from "../../assests/kohrong.jpg"
import Collosseum from "../../assests/collosseum.jpg"
import Maldvies2 from "../../assests/maldives2.jpg"
import TajMahal from "../../assests/tajmahal.jpg"
import GreatWall from "../../assests/greatwall.jpg"
import Chichen from "../../assests/chichen.jpg"
import Christ from "../../assests/chris.jpg"
import TaPrum from "../../assests/taprum.jpg"

import SelectsImg from '../selectImg/selectImg'

function Select () {
    return (
        <div name='views' className='selects'>
        <div className='container'>
            <SelectsImg bgImg={Angkor} text='Angkor Wat Temple of Cambodia' />
            <SelectsImg bgImg={TaPrum} text='Ta Phrom Temple of Cambodia' />
            <SelectsImg bgImg={TajMahal} text='Taj Mahal' />
            <SelectsImg bgImg={GreatWall} text='Great Wall of China' />
            <SelectsImg bgImg={Chichen} text='Chicen Itza' />
            <SelectsImg bgImg={Christ} text='Christ the Redeemer' />
            <SelectsImg bgImg={Collosseum} text='Collosseum' />
            <SelectsImg bgImg={KohRong} text='Koh Rong Island Resort' />
            <SelectsImg bgImg={Maldvies2} text='Barbados' />
            
        </div>

    </div>
    )
}

export default Select