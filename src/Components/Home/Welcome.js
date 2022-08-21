import React, { useEffect, useState } from "react";
import Slider from "./Slider";

function Welcome() {
    var axios = require('axios');
    const [images, setImages] = useState([])
    var config = {
        method: 'get',
        url: 'http://localhost:8080/api/app/slider',
        headers: {}
    };

    useEffect(() => {
        getHitelImage()
    }, []); // eslint-disable-line
    async function getHitelImage() {

        axios(config)
            .then(function (response) {
                setImages(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section>
            <div className="mt-8 p-8 xl:px-48 ">
                <div className="text-center ">
                    <h2 className="text-4xl font-semibold text-gray-800 font-serif">
                        Welcome To Hotel101
                    </h2>

                    <p className="text-gray-600 mt-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquam temporibus at eveniet excepturi a
                        architecto eligendi. Soluta perspiciatis quod excepturi!
                    </p>
                </div>

                <Slider images={images} />
            </div>
        </section>
    );
}

export default Welcome;
