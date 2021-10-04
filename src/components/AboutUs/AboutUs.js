import { faIdBadge, faLockOpen, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@mui/material';
import { grid } from '@mui/system';
import React from 'react';
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div className="about-us">
            <p className="regular-color">WHO WE ARE</p>
            <h1>We Are Providing The Best Quality Online Courses.<br /> Our All Instructors Are High Expert</h1>
            <div className="services">
                <p className="regular-color">WE ARE THE BEST</p>
                <h1>Why We Are The Best</h1>
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <div className="service">
                            <h1><FontAwesomeIcon icon={faIdBadge} /></h1>
                            <h3>High Quality Courses</h3>
                            <p>We provide you the high quality course</p></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="service">
                            <h1><FontAwesomeIcon icon={faUserAlt} /></h1>
                            <h3>Expert Instructors</h3>
                            <p>All of our instructors are highly expert</p></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="service">
                            <h1><FontAwesomeIcon icon={faLockOpen} /></h1>
                            <h3>Life Time Access</h3>
                            <p>Our course is providing you Life Time Access</p></div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AboutUs;