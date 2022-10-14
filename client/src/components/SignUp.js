import React, { useState } from 'react';

function SignUp({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, passwordConfirmation: passwordConfirmation }),
        })
        .then((r) => r.json())
        .then((user) => setUser(user));
    }

    return (
        <div className='flex items-center justify-center my-28 max-w-[79rem] mx-auto relative'>
            {/* <form onSubmit={handleSubmit} className="space-x-4">
                <label for="uname"><b>Username</b></label>
                    <input 
                    type="text" 
                    placeholder="Enter Username" 
                    name="uname" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <label for="uname"><b>Password</b></label>
                    <input
                    className='p'
                    placeholder='Enter Password'
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                <label for="uname"><b>Password confirmation</b></label>
                    <input
                    className='p'
                    placeholder='Confirm Password'
                        type="text"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
            <button type="submit">Sign Up</button>
            </form> */}
            
            <div className='w-1/2'>
                <div className=''>
                    <img src='blob.svg' className='absolute top-0 left-0 opacity-30 -z-10 w-1/2 h-auto' alt=''/>
                </div>
                <div className=''>
                    <img src='/register.png' alt=''/>
                </div>
            </div>
            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="text-3xl font-bold font-averia mb-8 text-center">Register</h1>
                        <form onSubmit={handleSubmit}>
                            <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username" />

                            <input 
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                            <input 
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                placeholder="Confirm Password" />

                            <button
                                type="submit"
                                class="w-full text-center py-3 rounded bg-light-brown text-white hover:bg-pink-300 focus:outline-none my-1"
                            >Create Account</button>
                        </form>
                        

                        <div class="text-center text-sm text-gray-500 mt-4">
                            By signing up, you agree to the 
                            <a href='/' class="no-underline border-b border-pink-200 text-grey-dark ml-2">
                                Terms of Service
                            </a> and 
                            <a href="/" class="no-underline border-b border-pink-200 text-grey-dark ml-2">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div class="text-gray-500 mt-6">
                        Already have an account? 
                        <a class="no-underline border-b border-blue-500 text-blue ml-2" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;