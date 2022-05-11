import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Angkor from "../../assests/angkorwat.jpg"
import TaPrum from "../../assests/taprum.jpg"
import TajMahal from "../../assests/tajmahal.jpg"

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={Angkor} alt='/' />
                    {/* <p className="legend">Maldives 1</p> */}
                </div>
                <div>
                    <img src={TaPrum} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={TajMahal} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel