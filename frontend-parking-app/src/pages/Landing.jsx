import '../styles/LandingStyle.css';
import { useNavigate } from 'react-router';


export const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className="landing-page">
            <h1>PARKING MOBILE APP</h1>
            <button className="login-btn" onClick={() => navigate("/login")}>LOG IN</button>
            <button className="register-btn" onClick={() => navigate("/register")}>REGISTER</button>   
        </div>   
    )
}