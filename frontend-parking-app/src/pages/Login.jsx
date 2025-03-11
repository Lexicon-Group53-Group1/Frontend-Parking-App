import {useForm} from 'react-hook-form';
import "../styles/style.css";

export const Login = () => {
    const{register, handleSubmit} =useForm();
    const onSubmit = (data) => { console.log(data);}
    return (
        <div className="container">
            <div className="form-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label>User name:</label>
                        <input type="email" placeholder="Enter your Email" {...register('email')} required/>
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input type="password" placeholder="Enter Password" {...register('password')} required/>
                    </div>
                    <div className="btn-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}