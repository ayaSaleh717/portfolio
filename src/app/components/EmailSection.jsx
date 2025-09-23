"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setEmailSubmitted(false);
    setLoading(true);

    try {
      const from_email = e.target.email.value;
      const subject = e.target.subject.value;
      const message = e.target.message.value;

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS is not configured. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
        );
      }

      // Variables should match your EmailJS template fields
      const templateParams = {
        from_email,
        subject,
        message,
      };

      const res = await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      if (res?.status === 200) {
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        throw new Error("Failed to send email via EmailJS.");
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(err.message || "Something went wrong while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
   
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/ayaSaleh717/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/aya-saleh-aba413226/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        <Image src="/images/connect.png" alt="hero image" className=""
                    width={300}
                    height={300}/>
                      <Image src="/images/p8.png" alt="hero image" className=""
                    width={300}
                    height={300}/>
        
      </div>
      
      <div>
        {emailSubmitted ? (
          <div className="mt-2 space-y-3">
            <p className="text-green-500 text-sm">Email sent successfully!</p>
           
          </div>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mb-2">{error}</p>
            )}
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-800/60 disabled:cursor-not-allowed text-white font-medium py-2.5 px-5 rounded-lg w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
         <div className="text-sm text-[#ADB7BE]">
              <p className="mb-1">Or connect by phone:</p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="tel:+963993661469"
                  className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-3 py-2 rounded-md"
                >
                  Call +963 993 661 469
                </a>
                <a
                  href="https://wa.me/963993661469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md"
                >
                  WhatsApp
                </a>
              </div>
            </div>
      </div>
    </section>
  );
};

export default EmailSection;
