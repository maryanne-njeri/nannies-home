// import React, { useState } from 'react';

// function SignUp({ setUser }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordConfirmation, setPasswordConfirmation] = useState("");

//     function handleSubmit(e) {
//         e.preventDefault();
//         fetch("/signup", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password, passwordConfirmation: passwordConfirmation }),
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
//                 <label for="uname"><b>Password confirmation</b></label>
//                     <input
//                     className='p'
//                     placeholder='Confirm Password'
//                         type="text"
//                         value={passwordConfirmation}
//                         onChange={(e) => setPasswordConfirmation(e.target.value)}
//                     />
//             <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     )
// }

// export default SignUp;


import React, { useState } from "react";
import Error from "./Error";
import FormField from "./FormField";
function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
        }),
        }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            r.json().then((user) => onLogin(user));
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        });
    }
    return (
        <form onSubmit={handleSubmit}>
        <div className="containerr">
        <div className="contact-boxx">
            <div className="lefty"></div>
            <div className="righty">
            <h2>Sign Up</h2>
            
            <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="field1"
                placeholder="Your Username"
            />
            <input
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="field1"
                placeholder="Password"
            />
            <input
                type="password"
                id="password_confirmation"
                autoComplete="new-password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="field1"
                placeholder="Confirm Your Password"
            />
            <button
                className="btn1"
                type="submit">{isLoading ? "Loading..." : "Sign Up"}
            </button>
            <FormField>
                {errors.map((err) => (
                <Error key={err}>{err}</Error>
                ))}
            </FormField>

            </div>
        </div>
        </div>
        </form>
    );
    }
    export default SignUpForm;