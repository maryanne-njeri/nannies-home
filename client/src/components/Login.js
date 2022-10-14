import React, { useState } from 'react';

function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        })
        .then((r) => r.json())
        .then((user) => setUser(user));
    }

    return (
        // <div className='mt-40'>
        //     <form onSubmit={handleSubmit} className="space-x-4">
        //         <label for="uname"><b>Username</b></label>
        //             <input 
        //             type="text" 
        //             placeholder="Enter Username" 
        //             name="uname" 
        //             value={username}
        //             onChange={(e) => setUsername(e.target.value)}
        //             />
        //         <label for="uname"><b>Password</b></label>
        //             <input
        //             className='p'
        //             placeholder='Enter Password'
        //                 type="text"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //             />
        //     <button type="submit">Login</button>
        //     </form>

        // </div>
    <div className='flex items-center justify-center my-28 max-w-[79rem] mx-auto relative'>
        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <section class="h-screen">
                <div class="container px-6 py-12 h-full">
                    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt=''/>
                    </div>
                    <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <h2 className='text-3xl font-bold font-averia mb-3'>Login</h2>
                        <form onSubmit={handleSubmit}>
                        {/* <!-- Username input --> */}
                        <div class="mb-6">
                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="username"
                            value={username}
                            placeholder="Username" 
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        {/* <!-- Password input --> */}
                        <div class="mb-6">
                        <input 
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" />
                        </div>

                        <div class="flex justify-between items-center mb-6">
                            <div class="form-group form-check">
                            <input
                                type="checkbox"
                                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck3"
                                checked
                            />
                            <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                                >Remember me</label
                            >
                            </div>
                            <a
                            href="#!"
                            class="text-gray-500 hover:underline focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                            >Forgot password?</a
                            >
                        </div>

                        {/* <!-- Submit button --> */}
                        <button
                            type="submit"
                            class="inline-block px-7 py-3 bg-light-brown text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            Sign in
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default Login;