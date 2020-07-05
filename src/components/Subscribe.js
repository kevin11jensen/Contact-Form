import React, { useState } from 'react';
import { device } from './device';
import styled from 'styled-components';

export function Subscribe() {
    const [user, setUser] = useState({name: '', email: '' });
    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(user.name);
        console.log(user.email);
    }
    return (
        
        <SubscribeForm 
        onsubmit = {e => handleSubmit(e)}
        >
            {console.log(user)}
            <label htmlFor = 'name'>
                <input
                name = 'name'
                placeholer = 'Enter Name Here'
                value = {user.name}
                onChange = {e => handleChange(e)}
                required
                />
            </label>
            <label htmlFor = 'email'>
                <input
                name = 'email'
                placeholer = 'Enter Email Here'
                value = {user.email}
                onChange = {e => handleChange(e)}
                required
                />
            </label>
            <button type = 'submit'>Subscribe</button>
        </SubscribeForm>
    );
}

const SubscribeForm = styled.form `

`
