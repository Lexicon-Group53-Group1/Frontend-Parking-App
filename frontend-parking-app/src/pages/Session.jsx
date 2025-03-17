import "../styles/sessionStyle.css";
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Session = () => {
    const navigate = useNavigate();
    const [sessionData, setSessionData] = useState({
        userID: 1,
        fullName: null,
        licensePlate: null,
        totalBalance: null,
        startTime: null,
        cost: null,
        isActive: false
    });

    const getAccountDetails = async () => {
        try {
            const response = await axios.post('http://localhost:7123/accountdetails', {
                userId: sessionData.userID,
            });
            
            setSessionData({
                fullName: response.data.Firstname + ' ' + response.data.Lastname,
                licensePlate: response.data.Licenseplate,
                totalBalance: response.data.Balance,
            });

        } catch (error) {
            console.error('Error getting details:', error);
        }
    };

    const startSession = async () => {
        try {
            const response = await axios.post('http://localhost:7123/start', {
                userId: sessionData.userID,
                startTime: new Date().toISOString()
            });

            setSessionData({
                startTime: response.data.startTime,
                cost: response.data.cost,
                isActive: true
            });

        } catch (error) {
            console.error('Error starting session:', error);
        }
    };

    return (
        <div className="page-main">
            <div className="session-logout">
                 <button className="logout-button" onClick={() => navigate("/")}>Logout</button>
            </div>

            <div className="session-list-box">
                    <h2>Previous Sessions</h2>
                    <div className="session-list-boxlist">
                        <div>2025-01-01 to 2025-02-02 <br></br> Cost: 500kr</div>
                        <div>2025-03-03 to 2025-04-04 <br></br> Cost: 500kr</div>
                        <div>2025-05-05 to 2025-06-06 <br></br> Cost: 500kr</div>
                        <div>2025-07-07 to 2025-08-08 <br></br> Cost: 500kr</div>
                        <div>2025-09-09 to 2025-10-10 <br></br> Cost: 500kr</div>
                        <div>2025-11-11 to 2025-12-12 <br></br> Cost: 500kr</div>
                        <div>2025-13-13 to 2025-14-14 <br></br> Cost: 500kr</div>
                        <div>2025-15-15 to 2025-16-16 <br></br> Cost: 500kr</div>
                        <div>2025-17-17 to 2025-18-18 <br></br> Cost: 500kr</div>
                        <div>2025-19-19 to 2025-20-20 <br></br> Cost: 500kr</div>
                    </div>
                </div>

                <div className="session-toggle-box">
                    <h2>Current Session</h2>
                    <div className="session-toggle-boxlist">
                        <div>{sessionData.fullName}Full Name </div>
                        <div>Car: </div>
                        <div>Total Balance: </div>
                        <div>Session Start Date: {sessionData.startTime ? new Date(sessionData.startTime).toLocaleString() : 'Not started'}</div>
                        <div>Current Session Cost: {sessionData.cost ? `${sessionData.cost}kr` : '0kr'}</div>
                        
                        <button className="start-session-button" onClick={startSession} disabled={sessionData.isActive}>
                            {sessionData.isActive ? 'Session Active' : 'Start Session'}
                        </button>
                        <button className="start-session-button" onClick={getAccountDetails}>
                            Temp get account details
                        </button>
                    </div>
                </div>
        </div>
    );
}