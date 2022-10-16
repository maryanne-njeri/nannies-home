// import React, { useState } from 'react';

// function Login({ setUser }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("")

//     function handleSubmit(e) {
//         e.preventDefault();
//         fetch("/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//         })
//         .then((r) => r.json())
//         .then((user) => setUser(user));
//     }

//     return (
//         <div className='mt-40'>
//             <form onSubmit={handleSubmit} className="space-x-4">
//                 <label for="uname"><b>Username</b></label>
//                     <input 
//                     type="text" 
//                     placeholder="Enter Username" 
//                     name="uname" 
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     />
//                 <label for="uname"><b>Password</b></label>
//                     <input
//                     className='p'
//                     placeholder='Enter Password'
//                         type="text"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//             <button type="submit">Login</button>
//             </form>

//         </div>
//     )
// }

// export default Login;




import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";

import SignUpForm from "./SignUpForm";
import Button  from "./Button";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <>
        {showLogin ? (
            <>
            <LoginForm onLogin={onLogin} />
            <Divider />
            <div class="reg-log-options">
                <p>
                Don't have an account? &nbsp;
                <Button color="secondary" onClick={() => setShowLogin(false)}>
                    Sign Up
                </Button>
                </p>
            </div>
            </>
    ) : (
            <>
            <SignUpForm onLogin={onLogin} />
            <Divider />
            <div class="reg-log-options">
                <p>
                Already have an account? &nbsp;
                <Button color="secondary" onClick={() => setShowLogin(true)}>
                    Log In
                </Button>
                </p>
            </div>
            </>
        )}
        </>
    );
    }

    const Divider = styled.hr`
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 16px 0;
    `;

    export default Login;