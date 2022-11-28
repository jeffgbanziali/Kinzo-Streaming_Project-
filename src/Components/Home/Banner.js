import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from '../../Data/MoviesData'
import FlexMoviesItems from './FlexMoviesItems';

function Banner() {
    return (
        <div className='relative w-full justify-center'>
            <Swiper
                direction='vertical'
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1000}
                modules={[Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                className='w-full xl:h-96 bg-dry lg:h-64 h-48'
            >

                {
                    Movies.slice(0.6).map((movie, index) => (
                        <SwiperSlide key={index} className="relative rounded overflow-hidden">
                           
                            <img
                                src={movie.image}
                                alt={movie.name}
                                className='w-96 h-96 object-cover ' />
                            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 flex flex-col justify-center right-0 left-0 lg:gap-8 md:gap-5 gap-4">
                                <h1 className="text-white text-xl lg:text-3xl xl:text-4xl sm:text-2xl font-sans font-bold truncate capitalize">
                                    {movie.name}
                                </h1>
                                <div className="flex gap-5 items-center text-dryGray">
                                    <FlexMoviesItems movie={movie}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }



            </Swiper>

        </div>
    )
}

export default Banner