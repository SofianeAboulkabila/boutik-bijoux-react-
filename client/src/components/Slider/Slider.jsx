import React from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import "./Slider.Scss";

const Slider = () => {
    const data = [
        "https://images.pexels.com/photos/5370640/pexels-photo-5370640.jpeg?auto=compress&cs=tinysrgb&w=1600&h=480",
        "https://images.pexels.com/photos/5370646/pexels-photo-5370646.jpeg?auto=compress&cs=tinysrgb&w=1600&h=480",
        "https://images.pexels.com/photos/5442465/pexels-photo-5442465.jpeg?auto=compress&cs=tinysrgb&w=1600&h=480",
    ];
    return (

        < div className="slider" >
            <div className="container">
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon">
                    <WestIcon />
                    <EastIcon />
                </div>
                <div className="icon"></div>
            </div>
        </div>
    )
}



export default Slider