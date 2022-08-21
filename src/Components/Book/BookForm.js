import React, { useState, useEffect } from "react";
import { addBooking } from "../../redux/actions/bookings";
import { setSuccess } from "../../redux/actions/global";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import BookingDetails from "./BookingDetails";
import PaymentForm from "./PaymentForm";
import Border from "../Global/Border";
import Loading from "../Global/Loading";
import ErrorMessage from "../Global/ErrorMessage";
import SuccessMessage from "../Global/SuccessMessage";
import useSecureLs from "../Global/useSecureLs";

function BookForm() {
    let { id } = useParams();
    const [room, setRoom] = useState([])
    var axios = require('axios');
    var config = {
        method: 'get',
        url: `http://localhost:8080/api/app/room/${id}`,
        headers: {}
    };
    useEffect(() => {
        getRoomId()
    }, [])// eslint-disable-line
    async function getRoomId() {
        await axios(config)
            .then(function (response) {
                setRoom(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [user_id] = useSecureLs("user_id");
    const [booking, setBooking] = useState({
        full_name: ["", ""],
        number: "",
        exp_month: "",
        exp_year: "",
        cvc: "",
        check_in: "",
        check_out: "",
        user_id,
        id,
        amount: 0
    });

    const maxLengthCheck = (e) => {
        if (e.target.value.length > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addBooking(dispatch, booking, state.auth.token);
    };

    let history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess(dispatch, null);
            if (state.bookings.success) {
                history.push(`/user-bookings/${booking.user_id}`);
            }
        }, 2000);
        return () => clearTimeout(timer);
    }, [state.bookings.success]); // eslint-disable-line

    useEffect(() => {
        document.title = `Book Your Hotel`;
    }, []); // eslint-disable-line
    return (
        <div className="flex flex-col items-center text-gray-800 lg:my-8">
            {state.bookings.loading && <Loading />}
            {state.bookings.success === false && (
                <ErrorMessage errors={state.bookings.errors} />
            )}
            {state.bookings.success && <SuccessMessage message="Success" />}
            <div className="bg-gray-300 p-5 lg:w-7/12 border border-gray-400 rounded-sm ">
                <BookingDetails getRoom={room} booking={booking} setBooking={setBooking} />
                <Border borderColor="border-gray-500" my="8" />
                <PaymentForm
                    booking={booking}
                    setBooking={setBooking}
                    maxLengthCheck={maxLengthCheck}
                    onSubmitHandler={onSubmitHandler}
                />
                <Border borderColor="border-gray-500" my="8" />
            </div>
        </div>
    );
}

export default BookForm;
