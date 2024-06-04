import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <>
        
      <Swiper
        // pagination={{
        //   type: 'progressbar',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-[50px]  bg-[lightblue]"
      >
        <SwiperSlide className=''>

        <div className='bg-[lightblue]  h-screen py-[45px] '>
            <h3 className='text-center'>Testimonials</h3>
            <h1 className='text-center py-[10px] font-bold text-2xl'>What People Say About Us</h1>

            <div className='text-center testimonailsbgimg opacity-85  w-[70%] my-[20px] mx-auto'>

            <div className='w-[60%] mx-auto text-center flex flex-col justify-center items-center my-[10px]'>
                <img src="TestImg.png" alt="testimg" className='testhw my-[20px]' />
                <h1 className='font-bold lg:text-3xl text-2xl my-[30px]'>"In an emergency situation, I was amazed by how quickly they accommodated me. The dentist's skill and compassion were evident. I'm grateful for their prompt care."</h1>

                <h3 className='font-bold mt-[15px]'>David Gahan</h3>
                <h3>Detroit, Michigan</h3>
            </div>    

            </div>
            </div>
        </SwiperSlide>

        
        <SwiperSlide className=''>

<div className='bg-[lightblue]  h-screen py-[45px] '>
    <h3 className='text-center'>Testimonials</h3>
    <h1 className='text-center py-[10px] font-bold text-2xl'>What People Say About Us</h1>

    <div className='text-center testimonailsbgimg opacity-85  w-[70%] my-[20px] mx-auto'>

    <div className='w-[60%] mx-auto text-center flex flex-col justify-center items-center my-[10px]'>
        <img src="TestImg.png" alt="testimg" className='testhw my-[20px]' />
        <h1 className='font-bold lg:text-3xl text-2xl my-[30px]'>"In an emergency situation, I was amazed by how quickly they accommodated me. The dentist's skill and compassion were evident. I'm grateful for their prompt care."</h1>

        <h3 className='font-bold mt-[15px]'>David Gahan</h3>
        <h3>Detroit, Michigan</h3>
    </div>    

    </div>
    </div>
</SwiperSlide>
      </Swiper>
    </>
  );
}


export default Testimonials;