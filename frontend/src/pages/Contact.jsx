import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_pl3yud9",    // 🔹 EmailJS Service ID
        "template_wnrjvdt",   // 🔹 EmailJS Template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        "f9pBQEqnQlIR8LC4P"     // 🔹 EmailJS Public Key
      )
      .then(() => {
        toast.success("Thanks for Contacting IMMT Team! Will revert back shortly");
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <div className="md:flex md:ml-15 md:mr-15 md:pt-5 md:justify-between ml-4 mr-4 mb-25">
        
        {/* LEFT CONTENT */}
        <div className="md:w-[750px] mt-1">
          <h1 className="font-bold text-2xl mb-1">
            Partner with IMMT to accelerate your digital journey.
          </h1>
          <h4 className="text-base indent-10">
            Whether you’re a business seeking custom technology or an individual
            looking to build future-ready skills, we’re here to help.
          </h4>

          <div className="flex flex-col mt-5">
            <p className="text-xl font-bold">
              Contact us today to explore our services.
            </p>
            <ul className="flex justify-center ml-4 text-base font-light mt-1 flex-col">
              <li>
                <span className="font-bold">📞 Phone: </span>99406 42303
              </li>
              <li>
                <span className="font-bold">📧 Email: </span>
                reach_us@immt.co.in
              </li>
              <li>
                <span className="font-bold">🏢 Address:</span> 2/208A, North 1st
                Street, Kalvi Nagar, Rajambadi, Madurai, Tamil Nadu 625019.
              </li>
              <li>
                <span className="font-bold">
                  <i className="fa-solid fa-landmark"></i>Landmark:
                </span>{" "}
                Near Madurai Kamaraj University (MKU).
              </li>
            </ul>
          </div>

          {/* MAP */}
          <div className="md:h-60 md:mt-7 mt-5 mb-8">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.936909322627!2d78.01918597577556!3d9.939207590163162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfd7a73189f3%3A0x65fb2e43ae228dc5!2sMK%20Tower!5e0!3m2!1sen!2sin!4v1765546197330!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="md:w-[500px] bg-gray-200 rounded-3xl md:p-8 shadow-xl p-5">
          <h1 className="text-2xl font-semibold mb-5 text-blue-800">
            Let's chat
          </h1>

          <form className="space-y-1" onSubmit={handleSubmit}>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-1"
            />

            <label className="block">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-1"
            />

            <label className="block">Phone number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-1"
            />

            <label className="block">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-1"
            />

            <label className="block">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            ></textarea>

            <button
              className="bg-blue-900 w-full rounded-2xl p-2 text-white cursor-pointer mt-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
