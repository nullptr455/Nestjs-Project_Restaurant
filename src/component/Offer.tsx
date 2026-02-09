import React from "react";
import Image from "next/image";
const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row">
      {/* TEXT container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burgers & French Fries
        </h1>
        <p className="text-white">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <button>Order Now</button>
      </div>
      {/* image container */}
      <div className="flex-1 w-full relative">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
