import React from "react";
import About from "./About";
import Banner from '../img/banner.png';
function Home (){
    return (
        <div>
            <img src={Banner} />
            <About />
        </div>
    )
}
export default Home;