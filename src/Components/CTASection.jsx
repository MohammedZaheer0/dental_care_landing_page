import React from 'react';

const CTASection = () => {
  return (
    <>  
            <div className='my-[20px] py-[50px]'>
                <div className='outerctasection max-w-[95%] lg:max-w-[80%] mx-auto grid md:grid-cols-[40%_60%] grid-cols-1 justify-center items-center' >
                        <div className='max-w-[100%]'>
                            <img src="contactImg.png" alt="contactusimg" className='max-w-[100%] rounded-tr-3xl md:rounded-none ctaimage'/>
                        </div>


                        <div className=''>
                            <h2 className='font-bold text-3xl text-center py-[30px]'>Free Consultation</h2>
                            <form action="" className=' lg:max-w-[80%] max-w-[90%] mx-auto '>
                            <div className='grid sm:grid-cols-2 sm:gap-5 grid-cols- gap-2'>
                                <input type="text" placeholder='Full Name*' required className='p-[15px] my-[15px] border-[1px] border-[lightgray] outline-none rounded-2xl'/>
                                <input type="text" placeholder='Im Intrested In*' required className='p-[15px] my-[15px] border-[1px] border-[lightgray] outline-none rounded-2xl'/>
                                <input type="email" placeholder='Email*' required className='p-[15px] my-[15px] border-[1px] border-[lightgray] outline-none rounded-2xl'/>
                                <input type="phone" placeholder='Phone Number*' required className='p-[15px] my-[15px] border-[1px] border-[lightgray] outline-none rounded-2xl'/>
                            </div>                                


                            <div className='font-bold py-[45px] text-center max-w-[100%]'>
                                <button type='submit'><span className='border-[2px] border-[#89DB7B] p-4 px-7 rounded-full bg-[#89DB7B] hover:bg-[white] duration-300 lg:inline-block cursor-pointer max-w-[100%]'>Get a Free Consultation<i className="fa-solid fa-arrow-right rotate-45 ml-[5px]"></i></span></button>
                        </div>
                            </form>
                            </div>               
                </div>
            </div>
    </>
  )
}

export default CTASection
