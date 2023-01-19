import React from "react";
import Link from "next/link";


const About = () => {
    return (
            <div id="about" className="card my-10 mx-auto w-[70%] bg-white bg-opacity-40 text-black transform transition duration-400 transition-opacity-10 hover:scale-105 ">
                <div className="card-body">
                <h2 className="card-title">About us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta corporis perspiciatis unde iure atque, nam totam tenetur fugiat distinctio assumenda qui, quisquam sit recusandae eum. Dolor voluptate odio ab.</p>
                <div className="card-actions justify-end">
                <Link href='https://t.me/imeetu_bot'>
                    <button className="btn text-black bg-white bg-opacity-20 border-none hover:text-white">Follow us!</button>
                </Link>
                </div>
                </div>
            </div>
    )
}

export default About