import { useForm } from 'react-hook-form';
import '../styles/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { API_BASE_URL } from "../config";



export const Login = () =>
{
    const { handleSubmit } = useForm();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSubmit = async () =>
    {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok)
        {
            const data = await response.json();
            localStorage.setItem("user", JSON.stringify(data.user));
            alert("Successful login!")
            navigate("/session");
        } else
        {
            alert("Failed to login. Check your credentials.")
        }

    }
    return (
        <div className="container">
            <div className="form-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label>Username:</label>
                        <input
                            type="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="btn-group">
                        <button type="submit" onClick={onSubmit}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}