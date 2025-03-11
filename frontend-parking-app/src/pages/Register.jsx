import {useForm} from 'react-hook-form';
import "../styles/style.css";

export const Register = () => {
    const{register, handleSubmit} =useForm();
    const onSubmit = (data) => { console.log(data);}
    return (
        <div className="container">
            <div className="form-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <input type="text" placeholder="Enter Full Name" {...register('name')} required/>
                </div>
                <div className="input-group">
                    <input type="email" placeholder="Enter your Email" {...register('email')} required/>
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Enter Password" {...register('password')} required/>
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Confirm Password" {...register('confirmPassword')} required/>
                </div>
                <div className="btn-group">
                    <button type="submit">Register</button>
                </div>
                </form>
            </div>
        </div>
    );
}