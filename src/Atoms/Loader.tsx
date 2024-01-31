import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-t-4 border-t-theme border-l-4 border-l-theme border-r-4 border-r-theme border-b-4 border-b-transparent rounded-[50%] animate-spin" />
      <p className="mt-2 tracking-wider">Loading...</p>
    </div>
  );
};

export default Loader;
