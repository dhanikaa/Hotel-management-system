import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        address: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Password match validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8090/api/customers/signup', formData);
            console.log('Response:', response.data); // Log the response from the backend
            // You can redirect the user or perform other actions based on the response
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
            <label>First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>
            <br />
            <label>Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </label>
            <br />
            <label>Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <br />
            <label>Confirm Password:
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </label>
            <br />
            <label>Phone Number:
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </label>
            <br />
            <label>Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <br />
            <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
