"use client";

import React from "react";

export default function ExclusiveEvents() {
  const events = [
    {
      img: "/events/Kuwait.png",
      title: "KUWAIT",
      desc: "12 DECEMBER 2025,WALDORF ASTORIA KUWAIT",
    },
    {
      img: "/events/Djerba.jpg",
      title: "DJERBA",
      desc: "12 DECEMBER 2025,RADISSON BLU PALACE RESORT & THALASSO",
    },
    {
      img: "/events/DOHA.png",
      title: "DOHA",
      desc: "12 DECEMBER 2025,CROWNE PLAZA DOHA – THE BUSINESS PARK",
    },
    {
      img: "/events/berlin.jpg",
      title: "BERLIN",
      desc: "12 DECEMBER 2025,COURTYARD BY MARRIOTT BERLIN CITY CENTER",
    },

    // ROW 2
    {
      img: "/events/ABU.png",
      title: "ABU DHABI",
      desc: "13 DECEMBER 2025",
    },
    {
      img: "/events/Athens.png",
      title: "ATHENS",
      desc: "13 DECEMBER 2025,ONE&ONLY AESTHESIS ATHENS",
    },
    {
      img: "/events/New-York.jpg",
      title: "NEW YORK",
      desc: "13 DECEMBER 2025,NEW YORK MARRIOTT MARQUIS",
    },
    {
      img: "/events/LONDON.png",
      title: "LONDON",
      desc: "13 DECEMBER 2025,THE LANDMARK LONDON",
    },

    // ROW 3
    {
      img: "/events/casablanca.jpg",
      title: "CASABLANCA",
      desc: "26 DECEMBER 2025,FOUR SEASONS HOTEL CASABLANCA",
    },
    {
      img: "/events/MUMBAI.png",
      title: "MUMBAI",
      desc: "27 DECEMBER 2025,NOVOTEL MUMBAI JUHU BEACH",
    },
    {
      img: "/events/tunis.jpg",
      title: "TUNIS",
      desc: "27 DECEMBER 2025,FOUR SEASONS HOTEL",
    },
    {
      img: "/events/abudhabi.png",
      title: "ABU DHABI",
      desc: "27 DECEMBER 2025,ROSEWOOD",
    },
  ];

  return (
    <div className="w-full bg-white py-20">
      {/* TOP HEADING */}
      <div className="text-center max-w-5xl mx-auto px-4">
        <h1 className="text-[32px] md:text-[38px] font-bold text-[#00102C] leading-tight">
          EXPERIENCE DUBAI’S FINEST PROPERTIES, WHEREVER YOU ARE
        </h1>

        <p className="text-gray-600 mt-5 text-[17px] leading-[1.7]">
          Discover our latest developments at our exclusive events, where
          outstanding quality aligns with compelling value and exceptional
          offerings. Each occasion is a display of excellence designed to
          inspire and engage. Join us for events that highlight our superior
          quality and take advantage of exclusive opportunities with Azizi
          Developments.
        </p>
      </div>

      {/* MAIN HEADING */}
      <h2 className="text-center text-[40px] font-bold text-[#00102C] mt-20 mb-10 tracking-wide">
        EXCLUSIVE EVENTS
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12 lg:px-24 max-w-[1700px] mx-auto">
        {events.map((e, i) => (
          <div
            key={i}
            className="rounded-xl shadow-xl overflow-hidden bg-[#e6dccf]"
          >
            <img src={e.img} className="w-full h-[260px] object-cover" />

            <div className="px-6 py-6 text-center">
              <h3 className="text-[22px] font-bold text-[#00102C]">
                {e.title}
              </h3>

              <p className="text-[15px] text-[#00102C] mt-3 leading-[1.5]">
                {e.desc}
              </p>

              <button className="mt-6 w-full py-3 bg-[#00102C] text-white font-semibold tracking-wide hover:bg-[#06204a] transition rounded-sm">
                Register Interest
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
