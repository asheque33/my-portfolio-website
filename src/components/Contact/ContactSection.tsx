"use client";
import Image from "next/image";
import Link from "next/link";
import githubIcon from "../../../public/github-icon.svg";
import linkedInIcon from "../../../public/linkedin-icon.svg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setSuccess(true);
            (form.current as HTMLFormElement).reset();
          },
          (error: any) => {
            setError(true);
          }
        );
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my12 py-24 gap-4 scroll-mt-24"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunity.My inbox is always
          open.Wheather you have raised question,just knock to me.Hopefully,we
          both will benefited.
        </p>
        <div className="flex flex-row gap-2">
          <Link href={"https://github.com/asheque33"}>
            <Image src={githubIcon} alt="githubIcon" />
          </Link>
          <Link href={"https://www.linkedin.com/in/ashequr-rahman-4b9b24281/"}>
            <Image src={linkedInIcon} alt="linkedInIcon" />
          </Link>
        </div>
      </div>
      <div>
        <form ref={form} onSubmit={handleSendEmail} className="flex flex-col ">
          <div className="mb-6">
            <label htmlFor="email" className="text-white mb-2 block text-sm">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="example@gmail.com"
              className=" bg-[#18191E] text-sm text-gray-100 rounded-lg border border-[#33353F] block w-full p-2.5 placeholder-[#9CA2A9]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white mb-2 block text-sm">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Just say Hi!"
              className=" bg-[#18191E] text-sm text-gray-100 rounded-lg border border-[#33353F] block w-full p-2.5 placeholder-[#9CA2A9]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white mb-2 block text-sm">
              Message
            </label>
            <textarea
              name="user_message"
              id="message"
              placeholder="Let's talk about your project!"
              className=" bg-[#18191E] text-sm text-gray-100 rounded-lg border border-[#33353F] block w-full p-2.5 placeholder-[#9CA2A9]"
              required
            />
          </div>
          <div>
            <button
              className="bg-secondary-500 hover:bg-secondary-600 text-white py-2.5 px-5 rounded-lg w-full"
              type="submit"
            >
              Send Message
            </button>
          </div>
          {success && (
            <span className="text-green-500 font-semibold">
              Your message has been sent successfully.
            </span>
          )}
          {error && (
            <span className="text-red-500 font-semibold">
              Something went wrong.
            </span>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
