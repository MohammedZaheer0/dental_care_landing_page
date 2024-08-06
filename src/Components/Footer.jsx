import React from 'react'
const Footer = () => {
  return (
    <>
        <div className='max-w-[95%] sm:max-w-[80%] mx-auto mb-[30px]'>
            <h2 className='text-[25px] font-bold  py-[20px] text-center sm:text-left'>
            57<span className='text-[#90EE90]'>D</span>entcare
            </h2>
            <div className='grid lg:grid-cols-[20%_20%_30%_30%] sm:grid-cols-2 text-center sm:text-left sm:gap-16 lg:gap-1 gap-10 grid-cols-1 justify-between font-medium'>
                
                <div id='footerdiv'>
                    <h2 className='font-bold pb-4'>Company</h2>
                    <p className='text-[#FE5E54]'>Home</p>
                    <p>Services</p>
                    <p>About Us</p>
                    <p>Why Choose Us</p>
                    <p>Testimonials</p>
                    <p>Contact Us</p>
                </div>

                <div id='footerdiv1'>
                    <h2 className='font-bold pb-4'>Pages</h2>
                    <p>404</p>
                    <p>Licensing</p>
                    <p>Instructions</p>
                    <p>Style Guide</p>
                    <p>Changelog</p>
                    <p>More Templates!</p>
                </div>

                <div id='footerdiv2'>
                    <h2 className='font-bold pb-4'>Address</h2>
                    <p>123 Dental Avenue City ville, <br /> State 12345 United States</p>
                    <p className='underline'>View on Maps </p>
                    
                    <h2 className='font-bold pb-4'>Inquiries</h2>
                    <p>(123) 456-7890</p>
                    <p>info@57dentcare.com</p>
                </div>

                <div id='footerdiv3'>
                    <h2 className='font-bold pb-4'>Newsletter</h2>
                    <p>Stay Updated with our Latest News </p>
                    <div className='border-[1px] border-[gray] rounded-full max-w-[80%] mx-auto sm:max-w-[100%]  p-2 mb-[20px] grid grid-cols-[80%_20%] justify-between items-center'>
                        <input type="text" className='outline-none px-[20px]' placeholder='Your Email'/>
                        <i className="fa-solid fa-arrow-right bg-[#89DB7B] px-3 py-2 text-center rounded-full ml-[5px]"></i>
                    </div>
                    <h2 className='font-bold pb-4'>Follow Us</h2>
                    <div >
                    <i className="fa-brands fa-facebook text-2xl mr-[10px] cursor-pointer hover:text-[#FE5E54]"></i>
                    <i className="fa-brands fa-twitter text-2xl mr-[10px] cursor-pointer hover:text-[#FE5E54]"></i>
                    <i className="fa-brands fa-youtube text-2xl mr-[10px] cursor-pointer hover:text-[#FE5E54]"></i>
                    <i className="fa-brands fa-pinterest text-2xl mr-[10px] cursor-pointer hover:text-[#FE5E54]"></i>
                    <i className="fa-brands fa-linkedin text-2xl mr-[10px] cursor-pointer hover:text-[#FE5E54]"></i>
                    <i className="fa-brands fa-tiktok text-2xl mr-[10px] cursor-pointer hover:text-[#FE5E54]"></i>
                    <i className="fa-brands fa-instagram text-2xl mr-[10px] cursor-pointer hover:text-[#FE5E54]"></i>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
export default Footer
