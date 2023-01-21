import React from "react";
import Form from "src/components/form.jsx"
import Link from "next/link";

const Hero = () => {
    return(
        <div className="flex flex-col items-center max-h-screen justify-center h-full">
            <div className="hero bg-inherit mx-4 my-20">
                <div className="flex space-y-4 flex-col items-center">
                        <div className="flex space-y-4 flex-col items-left">
                            <h1 className="text-5xl font-bold text-black">Beta testing signup form</h1>
                            <p className="py-6">We will contact you as soon as there will be place available</p>
                        </div>
                        <div className=" mx-auto ">
                            <Form />
                        </div>

                        <Link href="#about"><button className=" mx-16 btn  text-black bg-white bg-opacity-20 border-none hover:text-white">About us</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Hero