"use client";
import React from "react";
import Image from "next/image";
import { featuredProducts } from "./data";
const Featured = () => {
  return (
    <div className=" w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* single */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4"
          >
            {/* IMAGE CONTAINNER */}
            {item.img && (
              <div className="relative w-full h-[250px] md:h-[300px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            {/* Text containner */}
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="text-xl font-bold uppercase">{item.title}</h1>
              <p>{item.desc}</p>
              <span className="text-xl font-bold">{item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
