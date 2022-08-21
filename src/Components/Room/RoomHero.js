import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

function RoomHero({ room }) {

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {room.imgs.map((img, index) =>
                    <div key={index}>
                        {index === 0 ?
                            <img style={{ height: 500 }}
                                src={
                                    room.imgs
                                        ? `http://localhost:8080/image/${img.image}`
                                        : "http://placehold.it/300x300?text=image not available"
                                }
                                alt="room"
                                className="h-full w-full object-cover"
                            />
                            : ''}
                    </div>
                )}
                <div className="px-5 mt-5 md:pl-10 md:px-5 md:py-10">
                    <h1 className="text-2xl text-orange-800  font-semibold">
                        {room.name}
                    </h1>
                    <p className="mt-5 w-10/12">{room.description}</p>

                    <>
                        <h2 className="text-2xl text-orange-800  font-semibold mt-5">
                            Features
                        </h2>

                        <div className="flex">
                            <ul className="mt-5 ">
                                <li className="mt-2">
                                    <i className="fas fa-star fa-xs text-yellow-600 mr-2"></i>

                                </li>
                            </ul>
                            <ul className="mt-5 ml-5">
                                <li className="mt-2">
                                    <i className="fas fa-star fa-xs text-yellow-600 mr-2"></i>
                                </li>
                            </ul>
                        </div>
                    </>
                    <Link
                        to={`/book/${room.id}`}
                        className="bg-orange-600 mt-10 py-2 px-6 text-3xl text-gray-200 block text-center w-10/12 mx-auto hover:bg-orange-900 rounded-sm"
                    >
                        BOOK
                    </Link>
                </div>
            </div>
            <Slider images={room.imgs} />

        </section>
    );
}

export default RoomHero;
