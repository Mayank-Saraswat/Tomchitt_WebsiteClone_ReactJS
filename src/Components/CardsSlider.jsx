import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CardsSlider = ({ data, slidesToShow }) => {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: slidesToShow || 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true
    };

    return (
        <div className='w-3/4 m-auto p-3'>
            <div className='m-3'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className='h-auto rounded-xl bg-white'>
                            <div className='h-auto rounded-t-xl'>
                                <img src={d.img} alt='Reviewer' className='h-32 w-32 rounded-full mx-auto p-2' />
                            </div>

                            <div className='flex flex-col justify-center items-center gap-2 px-6'>
                                <p className='text-sm'>"{d.review}"</p>
                                <p className='text-sm font-semibold text-red-900 m-2'>{d.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default CardsSlider