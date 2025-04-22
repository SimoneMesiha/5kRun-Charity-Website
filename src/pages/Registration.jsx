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
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold text-center my-6">Registration Form</h1>
      {/* Responsive iframe container with inline styles */}
      <div
        style={{
          paddingBottom: "80.25%", // for aspect ratio of 16:9
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
