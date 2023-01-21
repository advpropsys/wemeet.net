import React from "react";

import { useState } from 'react';

// For display toasts  
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const submitForm = async (e) => {
        e.preventDefault();
        // console.log({email});
        if (email&&name){
        const res = await fetch('http://localhost:3000/api/submit-form', {
            method: 'POST',
            body: JSON.stringify({ email, name, token }),
            });
            
            // Success if status code is 201
            console.log(res.status);
            if (res.status === 201) {
            toast('Thank you for signing up!', { type: 'success',className:"bg-white backdrop-filter backdrop-blur-md bg-opacity-25 z-40"});
            } else {
            toast('Please re-check your inputs.', { type: 'error' });
            }} else {toast('Please re-check your inputs.', { type: 'error' });}
            
    };
    return(
    <div className="form-control w-96 max-w-full flex-col space-y-3 relative z-20">
        <label className="input-group input-group-vertical bg-white rounded-md backdrop-filter backdrop-blur-md bg-opacity-25">
            <span>Telegram nick</span>
            <input type="text" placeholder="@durov" className="input input-bordered bg-white rounded-md backdrop-blur-md bg-opacity-10" onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <label className="input-group input-group-vertical bg-white rounded-md backdrop-filter backdrop-blur-md bg-opacity-25">
            <span className="bg-inherit bg-opacity-20">Name</span>
            <input type="text" placeholder="Lebron James" className="input input-bordered bg-white rounded-md backdrop-blur-md bg-opacity-10" onChange={(e) => setName(e.target.value)} required/>
        </label>
        <label className="input-group input-group-vertical bg-white rounded-md backdrop-filter backdrop-blur-md bg-opacity-25">
            <span className="bg-inherit bg-opacity-20">Your secret token </span>
            <input type="text" placeholder="(optional)" className="input input-bordered bg-white rounded-md backdrop-filter backdrop-blur-md bg-opacity-10" onChange={(e) => setToken(e.target.value)}/>
        </label>
        <button className="btn  text-black bg-white bg-opacity-20 border-none hover:text-white" onClick={submitForm}>Join</button>
        <ToastContainer toastClassName={"bg-white backdrop-filter backdrop-blur-md bg-opacity-25 z-40"} className="backdrop-filter backdrop-blur-md bg-opacity-25" position="bottom-center"/>
        {/* <iframe  className="bg-opacity-0" height="450px" src="https://notionforms.io/forms/zapis-na-wemeet-beta"></iframe> */}
    </div>
    )
}

export default Form