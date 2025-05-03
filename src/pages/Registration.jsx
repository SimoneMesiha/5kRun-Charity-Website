import React from "react";

const RegistrationPage = () => {
  const iframeStyle = {
    border: "none",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="container mx-auto px-4 font-body text-gray-800">
      <h1 className="font-heading font-bold text-3xl sm:text-4xl text-center my-6">
        Registration Form
      </h1>
      {/* Responsive iframe container */}
      <div
        style={{
          paddingBottom: "56.25%", // 16:9 aspect ratio
          position: "relative",
          height: 0,
        }}
      >
        <iframe
          title="Registration Form"
          src="https://nynecopts.com/forms/44CA82D63E20313A"
          style={iframeStyle}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default RegistrationPage;
