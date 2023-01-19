import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return(
     <div className="navbar mx-auto my-4 max-w-[90%] bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 z-40 sticky top-4 ">
        <div className="navbar-start">
            <Link href="/" className="btn btn-ghost text-black text-opacity-70 normal-case text-xl">WeMeet</Link>
        </div>
        <div className="navbar-center">
            <p className=" text-opacity-70 font-light tracking-widest">Network Like A God.</p>
        </div>
        <div className="navbar-end">
            <Link href="/" className="btn text-black bg-white bg-opacity-20 border-none hover:text-white ">Get started</Link>
        </div>
    </div>
    )
}

export default Navbar