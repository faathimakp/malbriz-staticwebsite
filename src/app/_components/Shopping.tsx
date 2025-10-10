import React from "react";

const Shopping = () => {
  return (
    <div className="~p-[0.75rem]/[1.125rem]">
      {" "}
      <video
        className="w-full ~h-[70vh]/[75vh] object-cover rounded-[1.5rem]"
        src="/images/shopping.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Shopping;
