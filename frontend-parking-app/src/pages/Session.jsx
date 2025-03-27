import "../styles/sessionStyle.css";
import { useNavigate } from 'react-router';
import { useEffect,useState } from 'react';
import { PreviousSession } from '../components/PreviousSession';
import axios from 'axios';
import { API_BASE_URL } from "../config";

export const Session = () => {
    const navigate = useNavigate();
    const [preSession, setPreSession] = useState([]);
    const currentUser = JSON.parse(sessionStorage.getItem("user"))
    
    //DEBUG console.log("Raw currentUser from sessionStorage:", currentUser);

    const [sessionData, setSessionData] = useState({
        userID: 0,
        fullName: " ",
        licensePlate: " ",
        totalBalance: 0,
        startTime: "No Active Session",
        cost: 0,
        isActive: false,
        initUse: true
    });

    useEffect(() => {
        //DEBUG console.log("Current User:", currentUser);
        //DEBUG console.log("Current Session Data:", sessionData);

        if (currentUser != null) {
            //DEBUG console.log("CurrentUser userid:", currentUser.userID);
            
            setSessionData(prevState => ({
                ...prevState,
                userID: currentUser.userID,
                fullName: `${currentUser.firstname} ${currentUser.lastname}`,
                licensePlate: currentUser.licenseplate,
                totalBalance: currentUser.balance,
                startTime: "No Active Session",
                cost: 0,
                isActive: false,
                initUse: false
            }));
        } else {
            navigate('/');
        }
    }, []);

    // Update current session and all previous session
    // When userID is changed or isActive is changed
    useEffect(() => {
        if (sessionData.userID !== 0){
            getSession();
            getPreviousSessions();
            if (!sessionData.isActive){
            getBalance();
            }
        }
    }, [sessionData.userID, sessionData.isActive])

    // Start Session function
    async function startSession() {
        const response = await fetch(`${API_BASE_URL}/start-session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: sessionData.userID
        });

        if (response.ok)
        {
            const data = await response.json();

            setSessionData(prevState => ({
                ...prevState,
                startTime: data.startTime,
                isActive: true
            }));
        } else
        {
            alert("Unknown Error while starting session.")
        }
    };

        // End Session function
        // End active session then get totalbalance
    async function endSession() {
        const response = await fetch(`${API_BASE_URL}/end-session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: sessionData.userID
        });

        if (response.ok)
        {
            const data = await response.json();

            setSessionData(prevState => ({
                ...prevState,
                startTime: "No active session",
                cost: 0,
                isActive: false
            }));
        } 
        else if (response.conflict)
        {
            const data = await response.json();
            alert(data.message);
        }
        else
        {
            alert("Unknown Error while ending session.")
        }
    };

    // Get current session
    async function getSession(){
        try {
            //DEBUG console.log("UserID for getSession:", sessionData.userID)
            
            if (!sessionData.userID) {
                console.error("UserID is undefined or zero");
                return;
            }
    
            const response = await axios.get(`${API_BASE_URL}/current-session/${sessionData.userID}`);
    
            setSessionData(prevState => ({
                ...prevState,
                startTime: response.data.startTime,
                cost: response.data.cost,
                isActive: response.data.isActive
            }));
    
            //DEBUG console.log(response.data.message)
        } catch (error) {
            console.error('Error getting session:', error);
        }
    };

    // Get User Balance function
    async function getBalance() {
        try {
            const response = await axios.get(`${API_BASE_URL}/user-balance/${sessionData.userID}`);
    
            setSessionData(prevState => ({
                ...prevState,
                totalBalance: response.data.totalBalance
            }));
    
            //DEBUG console.log(response.data.message)
        } catch (error) {
            console.error('Error getting session:', error);
        }
    }

    // Get all previous sessions
    async function getPreviousSessions() {
        try {
            const response = await axios.get(`${API_BASE_URL}/previous-sessions/${sessionData.userID}`);
            
            //DEBUG console.log("Previous Sessions Response:", response.data);
            
            setPreSession(response.data.previousSession);
        } catch (error) {
            console.error('Error getting previous sessions:', error);
        }
    }

    // Logout function
    function logOut() {
        sessionStorage.removeItem('user')
        navigate('/')
    } 

    // HTML
    return (
        <div className="page-main">
            <div>
                <h2>Group 1 Parking App</h2>
            </div>
            <div className="session-logout">
                 <button className="logout-button" onClick={logOut}>Logout</button>
            </div>

            <div className="session-list-box">
                    <h2>Previous Sessions</h2>
                    <div className="session-list-boxlist">
                        {preSession.length>0? <PreviousSession data={preSession}/>:<div>No previous session</div>}
                    </div>
                </div>

                <div className="session-user-details">
                    <h2>User</h2>
                    <div className="session-toggle-boxlist">
                        <div>{sessionData.fullName}</div>
                        <div>{sessionData.licensePlate}</div>
                        <div>Balance: <br></br>{sessionData.totalBalance} kr</div>
                    </div>
                </div>

                <div className="session-toggle-box">
                    <h2>Current Session</h2>
                    <div className="session-toggle-boxlist">
                        <div>Session Start Date: <br></br>
                        {sessionData.isActive ? new Date(sessionData.startTime).toLocaleString() : "No Active Session"}
                        </div>
                        
                        <div>Current Session Cost: <br></br>{sessionData.isActive ? sessionData.cost + ' kr' : ""}</div>

                        {sessionData.isActive ? <button className="end-session-button" onClick={endSession}>End Session</button> : <button className="start-session-button" onClick={startSession}>Start Session</button>}
                    </div>
                </div>
        </div>
    );
}