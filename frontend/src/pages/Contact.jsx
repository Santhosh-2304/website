import axios from "axios";
import toast from "react-hot-toast";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact/send", form);

      toast.success("Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      toast.error("Failed to send message!");
      console.error(error);
    }
  };

  return (
    <>
    <div className='flex pl-15 pt-8 pr-15'>
      <div className='w-[700px] mr-[50px]'>
        <h1 className='font-bold text-3xl mb-2'>Partner with IMMT to accelerate your digital journey.</h1>
        <h4 className='text-lg'>Whether you’re a business seeking custom technology or an individual looking to build
        future-ready skills, we’re here to help.</h4>
        <p className='text-lg'>Contact us today to explore collaboration opportunities or to learn more about our services.</p>
        <ul className="ml-4 text-xl font-medium mt-7">
          <li className='mt-4'>📞 Phone: 99406 42303</li>
          <li className='mt-2'>📧 Email: info@immt.com</li>
          <li className='mt-2'>🏢 Address: 2/208A, North 1st Street, near MKU, Kalvi Nagar, Quarters, Rajambadi, Nagamalaipudukottai, Madurai, Tamil Nadu 625019</li>
        </ul>
      </div>
      <div className='w-[600px] ml-[50px] bg-gray-200 rounded-3xl p-8 shadow-xl'>
        <h1 className='text-2xl font-semibold mb-8 text-blue-800'>Let's chat</h1>
        <form className='space-y-2' onSubmit={handleSubmit}>
          <label className='block font-medium'>Full Name</label>
          <input type='text' name="name" value={form.name} onChange={handleChange} className='w-full border rounded-xl px-4 py-2 '></input>
          <label className='block '>Email address</label>
          <input type='email' name="email" value={form.email} onChange={handleChange} className='w-full border rounded-xl px-4 py-2'></input>
          <label className='block '>Phone number</label>
          <input type='text' name="phone" value={form.phone} onChange={handleChange} className='w-full border rounded-xl px-4 py-2'></input>
          <label className='block '>Subject</label>
          <input type='text' name="subject" value={form.subject} onChange={handleChange} className='w-full border rounded-xl px-4 py-2'></input>
          <label className='block '>Message</label>
          <textarea className='w-full border rounded-xl px-4 py-3' name="message" value={form.message} onChange={handleChange}></textarea>
          <button className='bg-blue-900 w-full rounded-2xl p-2 text-white cursor-pointer mt-2' type="submit"> Submit </button>
        </form>
      </div>
    </div>
    <div className="w-full h-96 mt-10">
      <iframe
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.936909322627!2d78.01918597577556!3d9.939207590163162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfd7a73189f3%3A0x65fb2e43ae228dc5!2sMK%20Tower!5e0!3m2!1sen!2sin!4v1765546197330!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>



    </>
  )
}

export default Contact