import React from "react";

const Resume = () => {
  return (
    <div className="w-full h-full p-4 md:p-6">
      <iframe
        src="/resume-26.pdf#view=FitH&toolbar=1"
        title="Resume"
        className="w-full h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] border-0"
      />
    </div>
  );
};

export default Resume;
