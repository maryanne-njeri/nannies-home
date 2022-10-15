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
        <div className='mt-40'>
            <form onSubmit={handleSubmit} className="space-x-4">
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
            </form>
        </div>
    )
}

export default SignUp;