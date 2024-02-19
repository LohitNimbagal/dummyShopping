import React from 'react'

function About() {
  return (
    <div className='bg-gray-100 min-h-screen py-10 pt-32 flex-1 px-5 lg:px-56'>
      <section className='space-y-2'>
        <h1 className='text-2xl text-blue-700 font-bold'>About GooShopping</h1>
        <p className='ml-2'>Welcome to GooShopping, your ultimate destination for online shopping convenience and quality. We're dedicated to providing you with a seamless shopping experience, offering a diverse selection of products at competitive prices.</p>

        <h2 className='text-xl text-blue-700 font-bold'>Our Mission</h2>
        <p className='ml-2'>At GooShopping, our mission is to redefine the online shopping experience by prioritizing customer satisfaction and product excellence. We're committed to delivering unparalleled service and fostering lasting relationships with our valued customers.</p>

        <h2 className='text-xl text-blue-700 font-bold'>What Sets Us Apart</h2>

          <ul className='space-y-1 ml-2'>
            <li><span className='font-bold text-gray-700'>Curated Selection:</span> Each product on GooShopping is carefully curated to ensure superior quality and value, empowering you to make informed purchasing decisions with confidence.</li>

            <li><span className='font-bold text-gray-700'>User-Focused Design:</span> Our platform is designed with your needs in mind, featuring intuitive navigation, responsive interfaces, and hassle-free checkout processes to enhance your shopping journey.</li>

            <li><span className='font-bold text-gray-700'>Secure Transactions:</span> Protecting your privacy and security is paramount at GooShopping. We employ state-of-the-art encryption technologies and stringent security protocols to safeguard your personal information and ensure secure transactions.</li>
          </ul>

        <h2 className='text-xl text-blue-700 font-bold'>Meet Our Team</h2>
        <ul className='space-y-1 ml-2'>
          <li><span className='font-bold text-gray-700'>Founder: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo eget nibh condimentum dignissim.</li>

          <li><span className='font-bold text-gray-700'>Lead Developer:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo eget nibh condimentum dignissim.</li>

          <li><span className='font-bold text-gray-700'>Marketing Manager:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo eget nibh condimentum dignissim.</li>
        </ul>

        <h2 className='text-xl text-blue-700 font-bold'>Contact Us</h2>
        <p className='ml-2'>Questions or feedback? We're here to help! Reach out to our dedicated customer support team at support@gooshopping.com or through our contact form.

        Thank you for choosing GooShopping as your trusted online shopping destination. Happy browsing!</p>
      </section>
    </div>
  )
}

export default About