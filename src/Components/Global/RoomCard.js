import React from "react";
function RoomCard({ room }) {
    return (
        <>
            <a
                className="mx-5 rounded-t-lg overflow-hidden shadow-xl mt-5 "
                data-aos="fade-up"
                href={`/room/${room.id}`}
            >
                <div className="relative">
                    {room.imgs.map((img, index) =>
                        <div key={index}>
                            {index === 0 ?
                                <img
                                    src={
                                        room.imgs ? `http://localhost:8080/image/${img.image}`
                                            : "http://placehold.it/300x300?text=hotel"
                                    }
                                    className="w-full h-64 object-cover"
                                    alt="hotel"
                                />
                                : ''}
                        </div>
                    )}
                    <div className="absolute bottom-0 text-gray-100 flex">
                        <div className="bg-orange-600 py-2 px-6 rounded-tr-lg flex flex-col items-center">
                            <span className="line-through text-gray-300 text-sm">
                                {parseFloat(room.priceday) + 100} $
                            </span>
                            <span className="text-xl">{room.priceday} $</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 py-5 px-2">
                    <h3 className="text-2xl font-medium text-center hover:text-gray-600">
                        {room.name}
                    </h3>
                </div>
            </a>
        </>
    );
}

export default RoomCard;
