import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import TitleSection from "../Global/TitleSection";

function FeaturedHotels() {
    var axios = require('axios');
    const [room, setRoom] = useState([])
    useEffect(() => (
        getRoom()
    ), []); // eslint-disable-line
    var config = {
        method: 'get',
        url: 'http://localhost:8080/api/app/room',
        headers: {}
    };
    async function getRoom() {
        await axios(config)
            .then(function (response) {
                setRoom(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section className="px-5 xl:px-48">
            <TitleSection title="Featured Hotels" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {room.map((hotel) => (
                    <HotelCard hotel={hotel} key={hotel.id} />
                ))}
            </div>
        </section>
    );
}

export default FeaturedHotels;
