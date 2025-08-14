import React from "react";

const Resume = () => {
  return (
    <div className="w-full h-full p-3 md:p-6">
      {/* Mobile: show whole page (zoomed out) */}
      <iframe
        src="/resume-26.pdf#view=Fit&toolbar=1"
        title="Resume (mobile)"
        className="block md:hidden w-full h-[calc(100vh-1.5rem)] border-0"
      />
      {/* Desktop: fit horizontally for readability */}
      <iframe
        src="/resume-26.pdf#view=FitH&toolbar=1"
        title="Resume"
        className="hidden md:block w-full md:h-[calc(100vh-3rem)] border-0"
      />
    </div>
  );
};

export default Resume;
