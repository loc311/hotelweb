import React from "react";
import { Link } from "react-router-dom";

function HotelCard({ hotel: { id, name, priceday, star, imgs } }) {
    return (
        <>
            <div
                className="bg-gray-100 rounded-sm  overflow-hidden shadow-lg mt-5"
                data-aos="fade-up"
            >
                <Link to={`/room/${id}`}>
                    <div className="relative ">
                        {imgs.map((img, index) =>
                            <div key={index}>
                                {index === 0 ?
                                    <img
                                        src={
                                            imgs ? `http://localhost:8080/image/${img.image}`
                                                : "http://placehold.it/300x300?text=hotel"
                                        }
                                        className="w-full h-64 object-cover"
                                        alt="hotel"
                                    />
                                    : ''}
                            </div>
                        )}
                        <div className="flex items-center justify-between w-full absolute bottom-0">
                            {/* bg opacity */}
                            <div className="absolute w-full h-full bg-gray-700 opacity-50"></div>
                            {/* content */}
                            <div className="flex items-center justify-between p-2 w-full z-10 h-12">
                                <div className="flex items-center justify-between">
                                    <div className="">
                                        {Array(star)
                                            .fill()
                                            .map((x, i) => (
                                                <i
                                                    className="fas fa-star fa-xs text-orange-400"
                                                    key={i}
                                                ></i>
                                            ))}
                                    </div>
                                </div>
                                <div className="text-gray-100 font-semibold">
                                    Starting From {priceday}$
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="p-5 uppercase text-xl font-bold font-serif  text-center text-orange-800 hover:text-orange-600">
                        Hotel {name}
                    </h2>
                </Link>
            </div>
        </>
    );
}

export default HotelCard;
