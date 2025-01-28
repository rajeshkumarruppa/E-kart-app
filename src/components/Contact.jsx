import React from 'react'

const Contact=()=>{
  return (
    <div>
      <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto ">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          Got questions or need help? We'd love to hear from you! Use the form
          below to send us a message, or reach out via email or phone.
        </p>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto">
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium text-lg py-3 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="mt-8 text-gray-600">
          <p>
            <strong>Email:</strong> support@yourshop.com
          </p>
          <p>
            <strong>Phone:</strong> +1 234 567 890
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
