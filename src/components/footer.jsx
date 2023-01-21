import React from "react";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="footer mx-auto my-6 max-w-[90%] bg-white bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-xl rounded-md items-center p-4 text-neutral-content static bottom-1 z-0">
            <div className="items-center grid-flow-col">
                <h2>WeMeet</h2>
                
                <FaTelegram size={28}/>
            </div> 
            <div className="md:place-self-center md:justify-self-end">
                <p>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>

    )
}

export default Footer