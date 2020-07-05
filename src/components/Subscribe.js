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
        id = 'subscribe'
        method = 'post'
        enctype = 'text/plain'
        onsubmit = {e => handleSubmit(e)}
        >
            <div className = 'subscribe-header'>
                <h3>Let's Stay in Touch</h3>
                <p>Sign Up to Receive News & Updates</p>
            </div>
            <div className = 'label-container'>
                {console.log(user)}
                <label htmlFor = 'name'>
                    <input
                    type = 'text'
                    name = 'name'
                    placeholder = 'Enter Name'
                    value = {user.name}
                    onChange = {e => handleChange(e)}
                    required
                    />
                </label>
                <label htmlFor = 'email'>
                    <input
                    type = 'email'
                    name = 'email'
                    placeholder = 'Enter Email'
                    value = {user.email}
                    onChange = {e => handleChange(e)}
                    required
                    />
                </label>
            </div>
            <div className = 'button-container'>
                <button type = 'submit'>Subscribe</button>
            </div>
        </SubscribeForm>
    );
}

const SubscribeForm = styled.form `
    

    background-color: lightgray;
    
    .subscribe-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
            margin-bottom: 0;
        }
    }
    .label-container {
        display: flex;
        justify-content: center;
        label {
            margin: 0 3% 1% 3%;
            input {
                padding: 9% 9% 9% 6%;
                font-size: 1.6rem;
                background: transparent;
                border: 1px solid black;
            }
        }
    }

    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            font-size: 1.6rem;
            padding: 2% 5%;
            background: transparent;
            border: 1px solid black;
            &:hover {

            }
        }
    }
`
