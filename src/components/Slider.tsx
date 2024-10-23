"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { setInterval } from "timers/promises";

const slides = [
    {
        id: 0,
        title: "Summer Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 1,
        title: "Winter Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 2,
        title: "Spring Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCurrent((prev) => {
                const nextSlide = prev === slides.length - 1 ? 0 : prev + 1;
                return nextSlide;
            });
        }, 4000);

        // Clear the interval when component unmounts
        return () => window.clearInterval(interval);
    }, []);
    return (
        <div className="h-[calc(100vh-48px)] overflow-hidden">
            <div
                className="flex w-max h-full transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`flex flex-col lg:flex-row w-screen ${slide.bg}`}
                    >
                        {/* TEXT  */}
                        <div className=" flex flex-col gap-8 h-1/2 lg:h-full lg:w-1/2 items-center justify-center text-center">
                            <h2 className="text-3xl md:text-5xl xl:text-5xl">
                                {slide.description}
                            </h2>
                            <h1 className="text-5xl md:text-7xl  xl:text-8xl font-semibold">
                                {slide.title}
                            </h1>
                            <Link href={slide.url}>
                                <button className=" p-4 ring-2 ring-black rounded-sm">
                                    COMPRAR AGORA
                                </button>
                            </Link>
                        </div>
                        {/* IMAGE */}
                        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
                            <img
                                src={slide.img}
                                alt=""
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute flex gap-4 left-1/2 bottom-8 items-center">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="w-[15px] h-[15px] ring-2 ring-black rounded-full flex items-center justify-center cursor-pointer"
                        onClick={() => setCurrent(slide.id)}
                    >
                        {current === index && (
                            <div className="w-[6px] h-[6px] bg-black rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
