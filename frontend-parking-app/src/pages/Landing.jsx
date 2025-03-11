import './Landing.css';
//import './Login.jsx'; onClick={() => <Login/>}
//import './Register.jsx'; onClick={() => <Register/>}

export const Landing = () => {
    return (
        <div className="landing-page">
            <h1>PARKING MOBILE APP</h1>
            <button id="login-btn">LOG IN</button>
            <button id="register-btn">REGISTER</button>   
        </div>   
    )
}