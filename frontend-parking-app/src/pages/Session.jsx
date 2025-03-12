import {useForm} from 'react-hook-form';
import "../styles/sessionStyle.css";
import { useNavigate } from 'react-router';

export const Session = () => {
    const navigate = useNavigate();
    return (
        <div className="page-main">
            <div className="session-logout">
                 <button onClick={() => navigate("/")}>Logout</button>
            </div>

            <div className="session-list-box">
                    <h2>session-list-box</h2>
                </div>

                <div className="session-toggle-box">
                    <h2>session-toggle-box</h2>
                </div>
        </div>
    );
}