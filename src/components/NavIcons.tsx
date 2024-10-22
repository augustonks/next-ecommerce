"use client";

import Link from "next/link";
import React, { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);

    const handleProfile = () => {
        setProfileOpen((value) => !value);
    };

    const handleCart = () => {
        setCartOpen((value) => !value);
    };

    return (
        <div className="flex gap-3 xl:gap-6 items-center relative">
            <img
                src="/profile.png"
                alt=""
                width={26}
                height={26}
                className="cursor-pointer"
                onClick={() => handleProfile()}
            />
            {isProfileOpen && (
                <div className="absolute right-16 top-10 text-black p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10">
                    <Link href="#">Profile</Link>
                    <div>Logout</div>
                </div>
            )}
            <img
                src="/notification.png"
                alt=""
                width={26}
                height={26}
                className="cursor-pointer"
            />
            <div className="relative">
                <img
                    src="/cart.png"
                    alt=""
                    width={26}
                    height={26}
                    className="cursor-pointer"
                    onClick={() => handleCart()}
                />
                <div className="absolute w-5 h-5 bg-red-400 -top-2 left-4 rounded-full text-sm text-white items-center justify-center flex">
                    2
                </div>
            </div>
            {isCartOpen && <CartModal />}
        </div>
    );
};

export default NavIcons;
