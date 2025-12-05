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
    <div className='flex p-20 '>
      <div className='w-[700px] mr-[50px]'>
        <h1 className='font-bold text-3xl mb-2'>Partner with IMMT to accelerate your digital journey.</h1>
        <h4 className='text-xl'>Whether you’re a business seeking custom technology or an individual looking to build
        future-ready skills, we’re here to help.</h4>
        <p className='text-xl'>Contact us today to explore collaboration opportunities or to learn more about our
        services.</p>
      </div>
      <div className='w-[600px] ml-[50px] bg-gray-200 rounded-3xl p-10 shadow-xl'>
        <h1 className='text-2xl font-semibold mb-8'>Let's chat</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <label className='block font-medium'>Full Name</label>
          <input type='text' name="name" value={form.name} onChange={handleChange} className='w-full border rounded-xl px-4 py-2 '></input>
          <label className='block '>Email address</label>
          <input type='email' name="email" value={form.email} onChange={handleChange} className='w-full border rounded-xl px-4 py-2'></input>
          <label className='block '>Phone number</label>
          <input type='text' name="phone" value={form.phone} onChange={handleChange} className='w-full border rounded-xl px-4 py-2'></input>
          <label className='block '>Subject</label>
          <input type='text' name="subject" value={form.subject} onChange={handleChange} className='w-full border rounded-xl px-4 py-2'></input>
          <label className='block '>Message</label>
          <textarea className='w-full border rounded-xl px-4 py-2' name="message" value={form.message} onChange={handleChange}></textarea>
          <button className='bg-blue-900 w-full rounded-2xl p-2 text-white cursor-pointer' type="submit"> Submit </button>

        </form>
      </div>
    </div>
  )
}

export default Contact