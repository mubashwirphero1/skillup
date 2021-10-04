import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@mui/material';
import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <h1>SkillUP</h1>
                    <p>We are providing high-quality online courses for about ten years. Our all instructors expert and highly experienced. We provide all kinds of course materials to our students</p>
                </Grid>
                <Grid item xs={4}>
                    <h2 className="text-900">Contact US</h2>
                    <p><FontAwesomeIcon icon={faLocationArrow} /> 250/A Oval Street, Mount View, London, United Kingdom</p>
                    <p><FontAwesomeIcon icon={faMailBulk} /> support@example.com</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +98 12345 67890</p>
                    <p>Feel free to contact us</p>
                </Grid>
            </Grid>
            <hr />
            <p className="text-center">&copy; Copyright 2021 | All Rights Reserved</p>
        </div>
    );
};

export default Footer;