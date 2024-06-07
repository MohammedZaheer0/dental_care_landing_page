import React from 'react';
import Button from './Button';
import HomeData from './HomeData';
import ServiceSection from './ServiceSection';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import CTASection from './CTASection';
import Footer from './Footer';

const Home = () => {
  return (
    <>
        {/* Home Section */}
        <div className="lg:max-w-[85%] sm:max-w-[95%] mx-auto lg:my-[30px] mt-[50px] sm:mt-[90px] mb-[50px]">

            <div className='grid lg:grid-cols-[55%_45%] md:grid-cols-[60%_40%] grid-cols-1 md:pt-[50px] sm:pt-[70px] lg:pt-[7rem] pt-[10px] text-center sm:text-left'>
                
                
                <div className='max-w-[90%]  lg:max-w-[80%] mx-auto justify-start items-start mb-[30px] sm:mb-[50px]'>
                    <h1 className='lg:text-3xl xl:text-5xl sm:text-3xl 3xl text-2xl font-bold sm:mb-[25px] mb-[25px] sm:mt-[-10%]'>Dental Excellence Starts Here: Your Guide to a Brighter, Healthier Smile</h1>

                    <div className='relative'>
                    <Button text='Booking Now' customClass="my-[40px] sm:my-[25px] font-bold bookingclass"/>
                    <img src="Subtract.jpg" alt="bookingimg" className='absolute sm:top-[-10%] md:left-[30%] lg:top-[10%] xl:left-[20%]  sm:left-[20%] left-[55%] sm:top-[-7%] top-[1%] bookingimg h-24 ' />
                </div>  
                </div>


                <div className='bg-image max-w-[95%] mx-auto bg-cover sm:h-[100%] h-auto mt-[20px] lg:mt-0 sm:mt-[40px]'>
                
                    <img src="good-looking-smiling-woman-looking-friendly-front 1.png"  alt="good-looking-smiling-woman" className='max-w-[95%] mt-[-15%] z-0 filterclass' />
                </div>
            </div>




            <div className='w-[100%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-1 gap-x-12 gap-y-14 mt-[5rem] md:mt-[-2%] z-40 bg-[white]'>
                {HomeData.map((value,index) => {
                    return(
                            <div key={index} className='max-w-[95%] mx-auto'>
                                <div className='p-[25px] home-cards h-full'>
                                    <img src={value.image} alt="images" className='md:h-12 h-10 my-[10px]'/>
                                    <p className='font-bold my-3'>{value.title}</p>
                                     <p>{value.content}</p>
                                </div>
                            </div>
                    )
                })}
            </div>
            
        </div> 
        
        {/* Services Section */}
        <ServiceSection/>
        <div className='relative'>
        <img src="Ellipse_107.png" alt="ellipse" className='absolute h-full ellipseimg right-0 top-0' />
        
        {/* About Section */}                    
        <AboutUs/>
        {/* WhuChooseUS Section */}
        <WhyChooseUs/>
        </div>

        {/* Testimonials Section */}
        <Testimonials/>
        {/* CTA Section */}
        <CTASection/>
        {/* Footer Section */}
        <Footer/>
    </>
  )
}

export default Home;
