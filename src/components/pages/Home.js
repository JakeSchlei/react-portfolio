import React from "react";
import selfPhoto from "../../assets/project photos/IMG_0623.JPG"


function Home() {
    return (
    <div>
        <div className="d-flex justify-content-around">
            <h1>Jake Schlei</h1>
            <h2>Web Developer</h2> 
        </div>
        <div className="d-flex justify-content-center">
        <img src={selfPhoto} alt="Jake Schlei" />
        </div>
    </div>
    )
};

export default Home;