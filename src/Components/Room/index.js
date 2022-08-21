import React, { useEffect, useState } from "react";
import Header from "../Global/Header";
import Footer from "../Global/Footer";
import Border from "../Global/Border";
import RoomHero from "./RoomHero";
import SuggestedRooms from "./SuggestedRooms";
import { useParams } from "react-router-dom";

function Room() {
    var axios = require('axios');
    const [room, setRoom] = useState([])
    const [roomList, setRoomList] = useState([])
    let { id } = useParams();

    useEffect(() => {
        getRoom();
        getRoomList();
    }, []); // eslint-disable-line
    async function getRoom() {
        await axios(config)
            .then(function (response) {
                setRoom(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    async function getRoomList() {
        await axios(configList)
            .then(function (response) {
                setRoomList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    var config = {
        method: 'get',
        url: `http://localhost:8080/api/app/room/${id}`,
        headers: {}
    };
    var configList = {
        method: 'get',
        url: 'http://localhost:8080/api/app/room',
        headers: {}
    };
    return (
        <>
            <Header />

            {room.map((item) => item !== null ? <RoomHero room={item} /> : '')}

            <Border />

            <SuggestedRooms
                suggestedRooms={roomList}
            />

            <Border />

            <Footer />
        </>
    );
}

export default Room;
