import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className='w-full px-[12%] 
    py-10 scroll-mt-20 
    bg-[url("/footer-bg-color.png")] bg-no-repeat bg-[length:90%_auto] bg-center'
    >
      <h4 className="text-center mb-2 text-lg ovo">Contact with me</h4>
      <h2 className="text-center text-5xl ovo">Get in touch</h2>
      <p className="ovo text-center max-w-2xl mx-auto mt-5 mb-12">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      =
      <form className="max-w-2xl mx-auto flex flex-col gap-6">
        <div>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
        </div>
        <textarea rows="6" placeholder="Enter your message" required />
        <button type="submit">Submit now </button>
      </form>
    </div>
  );
};

export default Contact;
