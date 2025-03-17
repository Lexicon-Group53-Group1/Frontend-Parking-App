import {useForm} from 'react-hook-form';
import "../styles/sessionStyle.css";
import { useNavigate } from 'react-router';
import { useEffect,useState } from 'react';
import { PreviousSession } from '../components/PreviousSession';
import axios from 'axios';

export const Session = () => {
    const navigate = useNavigate();
    const[preSession, setPreSession] = useState([]);
    const userId="Mary Dally_1";
    useEffect(() => {
        axios.get(`https://localhost:7229/get-previous-sessions/${userId}`)
        .then(response => {setPreSession(response.data.previousSession);})
    },[]);
    return (
        <div className="page-main">
            <div className="session-logout">
                 <button className="logout-button" onClick={() => navigate("/")}>Logout</button>
            </div>

            <div className="session-list-box">
                    <h2>Previous Sessions</h2>
                    <div className="session-list-boxlist">
                        {preSession.length>0? <PreviousSession data={preSession}/>:<div>No previous session</div>}
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
                        <div>Full Name</div>
                        <div>License Plate</div>
                        <div>Balance</div>
                        
                        <button className="start-session-button">Start Session</button>
                    </div>
                </div>
        </div>
    );
}