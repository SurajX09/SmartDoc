import { useState } from "react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { contact } from "../../data/contact";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24">
      <Container>
        <SectionTitle
          title={contact.title}
          subtitle={contact.subtitle}
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Get In Touch
            </h3>

            <div className="mt-6 sm:mt-8 space-y-6">
              <div>
                <h4 className="font-semibold">📞 Phone</h4>
                <p className="text-gray-600 break-words">{contact.phone}</p>
              </div>

              <div>
                <h4 className="font-semibold">📧 Email</h4>
                <p className="text-gray-600 break-words">{contact.email}</p>
              </div>

              <div>
                <h4 className="font-semibold">📍 Address</h4>
                <p className="text-gray-600">{contact.address}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 md:p-8"
          >
            <div className="space-y-4 sm:space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;