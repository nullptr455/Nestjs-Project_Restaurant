"use client";
import React, { useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, options }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const total =
    quantity * (options ? price + options[selected].additionalPrice : price);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* option container */}
      <div className=" flex gap-4">
        {options?.map((options, index) => (
          <button
            key={options.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md cursor-pointer "
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {options.title}
          </button>
        ))}
      </div>
      {/* quantity and button */}
      <div className="flex justify-between items-center">
        {/* Quantity */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500 rounded-l-md">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              className="font-bold cursor-pointer"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"-"}
            </button>
            <span>{quantity}</span>
            <button
              className="font-bold cursor-pointer"
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {"+"}
            </button>
          </div>
        </div>
        {/* cart button */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500 rounded-r-md cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
