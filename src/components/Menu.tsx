"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <img
                src="/menu.png"
                alt=""
                width={28}
                height={28}
                className="cursor-pointer"
                onClick={() => setOpen((value) => !value)}
            />
            {open && (
                <div className="absolute left-0 top-12 bg-slate-950 w-full h-[calc(100vh-3rem)] text-white flex flex-col justify-center items-center gap-8 text-xl z-10">
                    <Link href="#">Homepage</Link>
                    <Link href="#">Shop</Link>
                    <Link href="#">Deals</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Contact</Link>
                    <Link href="#">Logout</Link>
                    <Link href="#">Cart (1)</Link>
                </div>
            )}
        </div>
    );
};

export default Menu;
