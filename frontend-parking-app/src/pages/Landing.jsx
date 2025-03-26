import '../styles/LandingStyle.css';
import { useNavigate } from 'react-router';


export const Landing = () =>
{
    const navigate = useNavigate();
    return (
        <div className="landing-page">
            <h1>Group 1 Parking App</h1>
            <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
            <button className="register-btn" onClick={() => navigate("/register")}>Register</button>
        </div>
    )
}