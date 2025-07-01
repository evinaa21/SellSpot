import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../common/Layout'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  
  const [apiError, setApiError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setApiError(null);

    try {
      // The URL should point to your Laravel backend's API endpoint
      const response = await axios.post('http://localhost:8000/api/admin/login', data);

      if (response.data.status === true) {
        // Store the token and user info securely (e.g., localStorage)
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Redirect to the admin dashboard on successful login
        // We will create this page next.
        navigate('/admin/dashboard');
      }

    } catch (error) {
      if (error.response && error.response.data) {
        // Set the error message from the API response
        setApiError(error.response.data.message || 'An unexpected error occurred.');
      } else {
        setApiError('Could not connect to the server. Please try again later.');
      }
      console.error('Login failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   <Layout>
     <div className="admin-login-page">
     <div className="login-card">
        <div className="text-center mb-4">
            <Link className="navbar-brand brand-logo" to="/">
                <span className="brand-text">SellSpot</span>
                <span className="brand-dot">.</span>
            </Link>
        </div>
        <h2 className="login-title">Admin Login</h2>
        <p className="login-subtitle">Welcome back! Please enter your credentials.</p>
        
        {apiError && (
            <div className="alert alert-danger" role="alert">
                {apiError}
            </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email" 
                  placeholder="admin@sellspot.com" 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password" 
                  placeholder="••••••••" 
                  {...register("password", { 
                    required: "Password is required"
                  })}
                />
                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary w-100 btn-lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className="ms-2">Logging in...</span>
                </>
              ) : 'Login'}
            </button>
        </form>
        
        <div className="text-center mt-4">
            <Link to="/" className="back-to-site-link">← Back to Site</Link>
        </div>
     </div>
   </div>
   </Layout>
  )
}

export default Login;