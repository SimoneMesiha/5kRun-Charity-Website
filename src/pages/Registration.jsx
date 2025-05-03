import React from "react";

const RegistrationPage = () => {
  return (
    <div className="container mx-auto px-4 font-body text-gray-800">
      <h1 className="font-heading font-bold text-3xl sm:text-4xl text-center my-6">
        Registration Form
      </h1>

      {/* Full‐height responsive iframe */}
      <div className="relative w-full h-[80vh] sm:h-[60vh] lg:h-[70vh] mb-8">
        <iframe
          title="Registration Form"
          src="https://nynecopts.com/forms/44CA82D63E20313A"
          className="absolute inset-0 w-full h-full border-0 rounded-lg shadow-lg"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default RegistrationPage;
