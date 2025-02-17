import React from "react";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
const CARDS = [
  {
    id: 1,
    title:
      "Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!",
    img: image5,
    name: "Happy User",
    club: "tempy.club",
  },
  {
    id: 2,
    title:
      "Really easy to use and customize. easy to understand. Darinka helped me with my site! She answers very quickly, a good service! Thank you very much!",
    img: image6,
    name: "Happy User",
    club: "tempy.club",
  },
  {
    id: 3,
    title:
      "Really pleasing to look at! Documentation (including installation instructions) are clear and that is coming from a relatively new WordPress user.",
    img: image7,
    name: "Happy User",
    club: "tempy.club",
  },
];

export default function Cards() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-blue-color text-3xl font-extrabold text-center  mb-8">
            What others are saying
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <p className="text-gray-600 mb-10 text-left">{card.title}</p>
              <img
                src={card.img}
                alt={card.name}
                className="w-12 h-12 rounded-full mx-auto mb-2"
              />
              <h3 className="text-lg font-semibold">{card.name}</h3>
              <p className="text-gray-500">{card.club}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
