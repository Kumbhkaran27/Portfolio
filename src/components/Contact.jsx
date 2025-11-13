import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("Please complete the reCAPTCHA 🤖");
      return;
    }

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_n91rb9n",
        "template_2c89mcs",
        form.current,
        "Ks0DEJM-ybDEezMbK"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
          setCaptchaToken(null);
        },
        (error) => {
          setStatus("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-700">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full border p-3 rounded"
          />

          <input
            name="title"
            type="text"
            placeholder="Subject"
            required
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full border p-3 rounded h-32"
          />

          {/* 🔥 GOOGLE RECAPTCHA */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6Ldr5QssAAAAAKWfzmTL4lxx8ddAeriEkl9LnPrT"   
              onChange={handleCaptchaChange}
            />
          </div>

          <button
            type="submit"
            className="bg-pink-700 text-white px-6 py-3 rounded hover:bg-pink-800 disabled:opacity-50"
            disabled={!captchaToken}
          >
            Send Message
          </button>

          {status && (
            <p className="text-sm text-center text-gray-600 mt-2">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
