import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const serviceID = import.meta.env.VITE_service_ID;
    const templateID = import.meta.env.VITE_template_ID;
    const publicKey = import.meta.env.VITE_public_key;

    
    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ fullName: "", email: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-24 bg-gray-100">
      <div className="flex flex-wrap justify-center gap-12 p-6 w-full max-w-6xl">
        
        <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-lg mb-2">
            <strong>Phone:</strong> 01633910434
          </p>
          <p className="text-lg mb-2">
            <strong>Email:</strong> tondramou3@gmail.com
          </p>
          <p className="text-lg mb-2">
            <strong>Location:</strong> Khulna, Bangladesh
          </p>
        </div>

       
        <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label htmlFor="fullName" className="block text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block text-lg font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>

          {status && <p className="mt-4 text-green-500 text-center">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;