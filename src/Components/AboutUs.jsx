import React from 'react'
import Button from './Button'

const AboutUs = () => {
  return (
    <>
        <div className='w-80% mx-auto '>


            <div>
                <img src="AboutUsImg.png" alt="aboutus" />
                <img src="AboutUsDots.jpg" alt="" />
            </div>


            <div>
                <h3>About Us</h3>
                <h2>Patient-Centered Care</h2>
                <p>We are dedicated to providing exceptional dental care in a warm and welcoming environment. Our team of experienced, compassionate, and highly skilled professionals is here to ensure your dental experience is comfortable and stress-free.</p>

                <h2>Our Mission</h2>

                <p>At 57Dentcare, our mission is to promote optimal oral health and create lasting, confident smiles. </p>

                <div>
                    <Button text='Learn More'/>
                </div>
            </div>


        </div> 
    </>
  )
}

export default AboutUs
