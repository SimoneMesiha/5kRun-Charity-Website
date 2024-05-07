import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  const googleMapsUrl =
    "https://www.google.com/maps?q=1105+67th+St,+Brooklyn,+NY,+11219";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Info Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-10">CONTACT INFO</h2>
          <div className="mb-6">
            <p>Get in touch! Contact us via any of the methods listed below:</p>
            <div className="mt-4">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              cyhelpinghands@gmail.com
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6056.220688778284!2d-74.00931352344459!3d40.62744844278678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2454781c53bf1%3A0x6fd466b253ae43d6!2sSt.%20George%20Coptic%20Orthodox%20Church!5e0!3m2!1sen!2sus!4v1713310330957!5m2!1sen!2sus"
            height="450px"
            width="100%"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="md:flex-1">
          <h2 className="text-2xl font-bold mb-10">SEND A MESSAGE</h2>

          <form
            action="https://formsubmit.co/6803a7bee71de3247c7b855ab1d7cb7a"
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
