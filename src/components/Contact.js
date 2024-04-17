// src/components/Contact.js

import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");
    const submitBtn = document.getElementById("submitBtn");
    const contactDiv = document.getElementById("contactDiv");
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.5";
        submitBtn.classList.remove("hover:bg-indigo-600");

        contactDiv.classList.remove("pb-10");
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
      })
      .catch((error) => {
        console.error("Error:", error);
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
      });
  }

  return (
    <section id="contact" className="relative">
      <div id="contactDiv" className="container px-5 pt-5 pb-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-slate-800 text-5xl mb-1 italic font-serif text-center">
            Let's Connect!
          </h2>
          <p className="leading-relaxed mb-5 text-slate-800 text-center">
            I'm always looking for new opportunities and ideas. Share anything you'd like with me below.
          </p>
          <div className="flex justify-evenly gap-6">
            <div className="relative mb-4 w-full">
              <label htmlFor="name" className="leading-7 text-sm text-slate-800">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full bg-gradient-to-tl from-slate-800 to-slate-700 rounded border border-slate-700 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600 text-base outline-none text-slate-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4 w-full">
              <label htmlFor="email" className="leading-7 text-sm text-slate-800">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="w-full bg-gradient-to-tl from-slate-800 to-slate-700 rounded border border-slate-700 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600 text-base outline-none text-slate-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-slate-800">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              className="w-full bg-gradient-to-tl from-slate-800 to-slate-700 rounded border border-slate-700 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600 h-32 text-base outline-none text-slate-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            id="submitBtn"
            type="submit"
            className="text-white bg-emerald-800 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg transition-colors duration-200 ease-in-out">
            Submit
          </button>
          <div className="py-1">

          </div>
          <div id="success-message" class="hidden text-center bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
            <p>Message sent, thank you!</p>
          </div>

          <div id="error-message" class="hidden text-center bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            <p>Failed to send message. Please try again later.</p>
          </div>
        </form>
      </div>
    </section>
  );
}