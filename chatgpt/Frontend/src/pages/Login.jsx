import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


const Login = () => {
    const [ form, setForm ] = useState({ email: '', password: '' });
    const [ submitting, setSubmitting ] = useState(false);
    const navigate = useNavigate();
    

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitting(true);


        console.log(form);

        axios.post("http://localhost:3000/api/auth/login", {
            email: form.email,
            password: form.password
        },
            {
                withCredentials: true
            }
        ).then((res) => {
           toast.success(res.data.message)
            console.log(res);
            sessionStorage.setItem('user',JSON.stringify(res?.data?.user))
            navigate('/')
        }).catch((err) => {
            toast.error('Invalid password')
            console.error(err);
        }).finally(() => {
            setSubmitting(false);
        });

    }

    return (
        <div className="center-min-h-screen">
            <div className="auth-card" role="main" aria-labelledby="login-heading">
                <header className="auth-header">
                    <h1 id="login-heading">Sign in</h1>
                    <p className="auth-sub">Welcome back. We've missed you.</p>
                </header>
                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="field-group">
                        <label htmlFor="login-email">Email</label>
                        <input id="login-email" name="email" type="email" autoComplete="email" placeholder="you@example.com"  onChange={handleChange} required />
                    </div>
                    <div className="field-group">
                        <label htmlFor="login-password">Password</label>
                        <input id="login-password" name="password" type="password" autoComplete="current-password" placeholder="Your password"  onChange={handleChange} required />
                    </div>
                    <button type="submit" className="primary-btn" disabled={submitting}>
                        {submitting ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>
                <p className="auth-alt">Need an account? <Link to="/register">Create one</Link></p>
            </div>
        </div>
    );
};

export default Login;