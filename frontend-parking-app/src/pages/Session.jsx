import {useForm} from 'react-hook-form';
import "../styles/sessionStyle.css";

export const Session = () => {
    const{Session, handleSubmit} =useForm();
    const onSubmit = (data) => { console.log(data);}
    return (
        <div className="page-main">

            <div className="session-logout">
                <h2>logout</h2>
            </div>

            <div>
                <div className="session-list-box">
                    <h2>session-list-box</h2>
                </div>

                <div className="session-toggle-box">
                    <h2>session-toggle-box</h2>
                </div>
            </div>
        </div>
    );
}