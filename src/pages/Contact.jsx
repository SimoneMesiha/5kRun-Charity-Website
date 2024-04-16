import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Info Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">CONTACT INFO</h2>
          <div className="mb-6">
            <p>Get in touch! Contact us via any of the methods listed below:</p>
            <div className="mt-4">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              email@....
            </div>
            <div className="mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              St. George Coptic
              <br />
              1105 67th St, Brooklyn, NY, 11219
            </div>
          </div>
          <div className="flex mt-4">
            <FontAwesomeIcon icon={faInstagram} size="lg" className="mr-2" />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:flex-1">
          <h2 className="text-2xl font-bold mb-4">SEND A MESSAGE</h2>
          <form
            action="https://formsubmit.co/lezative@mailgolem.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New submission from the contact page!"
            />
            {/* Add this line if you want to hide the FormSubmit branding */}
            <input type="hidden" name="_honey" value="" />
            <input type="hidden" name="_captcha" value="true" />
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-2 border"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-2 border"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full p-2 border"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
