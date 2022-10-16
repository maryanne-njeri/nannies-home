import React, { useState } from "react";
import Error from "./Error";
import FormField from "./FormField";


function LoginForm({ onLogin }) {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);
function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
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
    <form onSubmit={handleSubmit} autoComplete="off">
    <div className="containerr">
        <div className="contact-boxx">
        <div className="lefty"></div>
            <div className="righty">
        <h2>Log In</h2>
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
        <button
            className="btn1"
            type="submit">{isLoading ? "Loading..." : "Login"}
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

export default LoginForm;