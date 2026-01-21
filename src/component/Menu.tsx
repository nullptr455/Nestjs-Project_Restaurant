"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./carticon";

const links = [
    {id: 1, title: "Homepage", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Working hours", url: "/"},
    {id: 4, title: "contact", url: "/"},
]
const Menu = () =>{
    const [open, setOpen] = useState(false);
    const user = false;
    return(
        <div>

            {!open ? (<Image
                    src="/open.png"
                    alt=""
                    width={20}
                    height={20} onClick={() => setOpen(true)}
                    className="cursor-pointer"/>):(<Image
                        src="/close.png"
                        alt=""
                        width={20}
                        height={20} onClick={() => setOpen(false)} 
                        className="cursor-pointer"/>

                    )}
                    {open &&(<div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10" >    
                        {links.map((item) => (
                            <Link href={item.url} key={item.id} onClick={()=> setOpen(false)} 
                            className="cursor-pointer hover:text-yellow-300 transition">
                            {item.title}
                            </Link>
                            
                            ))}

                            {!user ? (<Link href="/login" onClick={()=> setOpen(false)}
                            className="cursor-pointer hover:text-yellow-300 transition">Login </Link>
                            ) :(
                            <Link href="/order" onClick={()=> setOpen(false)}
                            className="cursor-pointer hover:text-yellow-300 transition">order </Link>)}
                            <Link href = "/cart" onClick={()=> setOpen(false)}
                            >
                            <CartIcon/>
                            </Link>
                            
                            
                    </div>)}
        </div>
    );
};
export default Menu;