import { Grid } from '@mui/material';
import React from 'react';
import { useHistory } from "react-router-dom";
import "./Home.css"

const Home = () => {
    let history = useHistory();

    // Event Handler for buttons
    const setPathCourse = () => {
        history.push("/course")
    }
    return (
        <div>
            <div className="top-banner">
                <div className="top-banner-opacity">
                    <h3 className="regular-small">GROW YOUR SKILLS WITH SkillUP</h3>
                    <h1 className="banner-h1">Connect With Our Expert And Start Learning Today</h1>
                    <p className="banner-bottom-p">We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                    <button onClick={setPathCourse} className="regular-btn">EXPLORE COURSES</button>
                </div>
            </div>
            <div className="course-offer">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img className="fluid" src="https://www.reliablesoft.net/wp-content/uploads/2019/08/digital-marketing-courses.png" alt="offer" />
                    </Grid>
                    <Grid item xs={6}>
                        <p className="regular-small">LIMITED TIME OFFER</p>
                        <h1>50% Discount On All Of Our New & Upcoming Courses</h1>
                        <h3>50% Discount On All Of Our New & Upcoming Courses. So what are you waiting for ? Enroll our courses.</h3>
                        <button onClick={setPathCourse} className="regular-btn">Enroll now</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Home;