import React from "react";
import { useForm } from "react-hook-form";
import linkedinIcon from "../assets/linkedin-logo.svg";
import githubLogo from "../assets/github-logo.svg";
import twitterIcon from "../assets/twitter-logo.svg";
import instagramIcon from "../assets/insta-logo.svg";
import useContactForm from "../hooks/useContactForm";
import mobileImage from "../assets/image 25.png";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { onSubmit, isSubmitting, isSuccess, isError } = useContactForm(reset);

  return (
    <section className="flex flex-col lg:flex-row lg:justify-between px-4 py-12 md:px-20 lg:px-24">
      {/* Mobile-only Image */}
      <div className="lg:hidden w-full mb-8 rounded-lg overflow-hidden">
        <img 
          src={mobileImage} 
          alt="Contact Header"
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Left Section - Contact Info */}
      <div className="flex flex-col gap-6 lg:w-1/2">
        <h2 className="text-[30px] md:text-[60px] font-Bebas font-bold uppercase text-[#FFFFFF] mb-4">
          LET'S CONNECT
        </h2>
        <p className="text-sm md:text-base text-[#C7C7C7] font-Manrope">
          Say hello at{" "}
          <a href="mailto:umezurikeisrael012@gmail.com" className="text-[#D3E97A] hover:underline">
            umezurikeisrael012gmail.com
          </a>
          .<br />
          For more info, here is my{" "}
          <a href="/resume.pdf" className="text-[#D3E97A] hover:underline">
            resume
          </a>
          .
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </a>
        </div>

        <div className="mt-12 text-sm text-[#C7C7C7] font-Manrope hidden lg:block">
          © 2025 Izzy World
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex flex-col gap-6 font-Manrope lg:w-1/2 mt-12 lg:mt-0">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Status Messages */}
          {isSuccess && (
            <div className="p-4 mb-4 bg-green-100 text-green-700 rounded-lg">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {isError && (
            <div className="p-4 mb-4 bg-red-100 text-red-700 rounded-lg">
              Oops! Something went wrong. Please try again later.
            </div>
          )}

          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[#FFFFFF] text-sm font-medium">
              Name *
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-4 rounded-lg bg-[#1A1A1A] text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[#FFFFFF] text-sm font-medium">
              Email *
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="w-full p-4 rounded-lg bg-[#1A1A1A] text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Subject Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-[#FFFFFF] text-sm font-medium">
              Subject *
            </label>
            <input
              id="subject"
              type="text"
              {...register("subject", { required: "Subject is required" })}
              className="w-full p-4 rounded-lg bg-[#1A1A1A] text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[#FFFFFF] text-sm font-medium">
              Message *
            </label>
            <textarea
              id="message"
              {...register("message", { 
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters"
                }
              })}
              rows="6"
              className="w-full p-4 rounded-lg bg-[#1A1A1A] text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#D3E97A] text-[#0A0A0A] w-30 uppercase font-bold py-3 px-6 rounded-4xl hover:bg-[#c2d86a] transition-all mt-4 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {isSubmitting ? "SENDING..." : "SUBMIT"}
          </button>
        </form>
      </div>

      {/* Mobile Copyright */}
      <div className="mt-12 text-sm text-[#C7C7C7] lg:hidden">
        © 2025 Izzy World
      </div>
    </section>
  );
};

export default ContactForm;