import {useForm} from 'react-hook-form';
import "../styles/style.css";
import {useNavigate } from 'react-router';
import axios from 'axios';
import { API_BASE_URL } from "../config";

export const Register = () => {
    const navigate = useNavigate();
    const{register, handleSubmit} =useForm();
    const onSubmit = async(data) => {
        try {
        const response = await axios.post(`${API_BASE_URL}/register-user`, {
            //userId: "String",
            username: data.email, //userName: data.email,
            firstname: data.firstname, //firstName: data.firstName,
            lastname: data.lastname, //lastName: data.lastName,
            password: data.password,
            licenseplate: data.licenseplate, //carPlateNumber: data.licenseplate,    
        });

        alert(response.data.message);
        navigate('/login');
        }
        catch(error){
            alert(error.response?.data?.message||"Registration failed");
        }
    }
    return (
        <div className="container">
            <div className="form-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <label>User name:</label>
                    <input type="email" placeholder="Enter your Email" {...register('email')} required/>
                </div>
                <div className="input-group">
                    <label>First name:</label>
                    <input type="text" placeholder="Enter First Name" {...register('firstname')} required/>
                </div>
                <div className="input-group">
                    <label>Last name:</label>
                    <input type="text" placeholder="Enter Last Name" {...register('lastname')} required/>
                </div>
                <div className="input-group">
                    <label>Licenseplate:</label>
                    <input type="text" placeholder="Enter Licenseplate" {...register('licenseplate')} required/>
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter Password" {...register('password')} required/>
                </div>
                <div className="input-group">
                    <label>Confirm Password:</label>
                    <input type="password" placeholder="Confirm Password" {...register('confirmPassword')} required/>
                </div>
                <div className="btn-group">
                    <button type="submit">Register</button>
                </div>
                </form>
            </div>
            <div className="info-box">
                <h3>New user</h3>
                <p>Register to use the parking app.</p>
                <p>Your e-mail address is your user name when you log in.</p>
                <p>Already have an account? <a href="/login">Log in</a></p>

            </div>
        </div>
    );
}