'use client';

import React, { useState } from 'react';
import { sendData } from '@/actions/action';

const Page = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    try {
      const { name, value } = e.target;
      setFormdata((prev) => ({ ...prev, [name]: value }));
    } catch (error: any) {
      setSuccess(false);
      setMessage('Something went wrong while updating the form.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await sendData(formdata);
      if (!response) throw new Error('Failed to send message');

      setFormdata({ name: '', email: '', message: '' });
      setSuccess(true);
      setMessage('Your message was sent successfully!');
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setSuccess(false);
      setMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <section className="relative z-10 py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-6">
            Let’s <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
            Have a question, idea, or project in mind? I’d love to hear from you.
          </p>

          {/* Feedback message */}
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg text-center text-sm font-medium ${
                success
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}
            >
              {message}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">Your Name</p>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleForm}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">Your Email</p>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleForm}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">Your Message</p>
              <textarea
                name="message"
                value={formdata.message}
                onChange={handleForm}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-xl shadow transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Message */}
      <div className="text-center px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        <p className="text-lg">
          Thank you for reaching out! I’ll get back to you as soon as possible.
        </p>
        <p className="mt-2 text-sm">
          You can also email me directly at{' '}
          <a
            href="mailto:majedshmaitlu@gmail.com"
            className="text-blue-600 hover:underline"
          >
            majedshmaitlu@gmail.com
          </a>
        </p>
      </div>
    </>
  );
};

export default Page;
