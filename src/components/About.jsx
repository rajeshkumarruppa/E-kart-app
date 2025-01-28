import React from 'react'

const About = () => {
  return (
    <div>
      <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-4">
          Welcome to <span className="font-semibold text-gray-800">Your E-Shop Name</span>, 
          your one-stop destination for high-quality [products or services]. 
          We are committed to providing the best shopping experience for our customers.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Founded in <span className="font-semibold">[Year]</span>, we have grown from a small idea into 
          a thriving e-commerce platform, thanks to our loyal customers and passionate team.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Our mission is to deliver exceptional value, maintain sustainability, 
          and prioritize your satisfaction with every purchase.
        </p>

        {/* Call to Action */}
        <div>
          <a
            href="/contact"
            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
