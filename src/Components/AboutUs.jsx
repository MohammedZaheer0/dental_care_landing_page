import React from 'react'
import Button from './Button'

const AboutUs = () => {
  return (
    <>
        <div className='w-[80%] mx-auto grid md:grid-cols-2 grid-cols-1 lg:my-[180px] my-[80px] sm:my-[100px]  items-start'>


            <div className='sm:w-[80]% mx-auto relative'>
                <img src="AboutUsImg.png" alt="aboutus" className='bg-[#FFB6C1] aboutusimage' />
                <img src="AboutUsDots.jpg" alt="" className='absolute bottom-[-17%] aboutusdots right-[5%]' />
            </div>


            <div className='sm:w-[80%] mx-auto py-5 mt-[100px] sm:mt-[120px] md:mt-[0] '>
                <h3 className='font-bold text-[#89DB7B] mb-[10px]'>About Us</h3>
                <h2 className='font-bold text-2xl mb-[30px]'>Patient-Centered Care</h2>
                <p className='mb-[30px]'>We are dedicated to providing exceptional dental care in a warm and welcoming environment. Our team of experienced, compassionate, and highly skilled professionals is here to ensure your dental experience is comfortable and stress-free.</p>

                <h2 className='font-bold mb-[10px]'>Our Mission</h2>

                <p className='mb-[30px]'>At 57Dentcare, our mission is to promote optimal oral health and create lasting, confident smiles. </p>

                <div className='learnmorebutton'> 
                    <Button text='Learn More'/>
                </div>
            </div>


        </div> 
    </>
  )
}

export default AboutUs
