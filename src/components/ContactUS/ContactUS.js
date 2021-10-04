import { Button, TextField } from '@mui/material';
import React from 'react';
import "./ContactUS.css"

const ContactUS = () => {
    return (
        <div className="contact-us">
            <h1>Wan't to contact with us ???</h1>
            <TextField
                id="filled-search"
                label="Your E-mail"
                type="search"
                variant="filled"
            />
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <TextField
                id="filled-search"
                label="Your Phone number"
                type="search"
                variant="filled"
            />
            &nbsp;
            &nbsp;
            <button className="regular-btn">Contact with us</button>
        </div >
    );
};

export default ContactUS;