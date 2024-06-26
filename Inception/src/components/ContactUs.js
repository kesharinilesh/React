import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us w-6/12 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        We're here to help! Feel free to reach out to us with any questions or feedback you may have.
      </p>

      <form className="flex flex-col space-y-4">
        <label htmlFor="name" className="text-sm font-medium">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        <label htmlFor="email" className="text-sm font-medium">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='@gmail.com'
          required
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        <label htmlFor="message" className="text-sm font-medium">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="rounded-md border border-gray-300 px-3 py-2 h-24 focus:outline-none focus:ring-1 focus:ring-blue-500"
        ></textarea>

        <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
