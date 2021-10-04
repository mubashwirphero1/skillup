import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';
import "./Courses.css"

const Courses = () => {
    return (
        <div>
            <h1>Explore our courses</h1>
            <Grid container spacing={5}>
                <Grid item xs={5}>
                    <div className="course-container">
                        <img className="img-fluid" src="https://media.istockphoto.com/vectors/front-end-development-vector-id1019917456?k=20&m=1019917456&s=612x612&w=0&h=QOR5CEeVdLPgP8dsYDuYn9Djmg9d7VFZjnzyhisWnps=" alt="" />
                        <div className="course-content">
                            <h2 className="course-price">$30</h2>
                            <h1>Front-End web development</h1>
                            <h3><Rating readonly initialRating={4.1} emptySymbol="far fa-star" fullSymbol="fas fa-star"></Rating> (50 reviews)</h3>
                            <br />
                            <h3><FontAwesomeIcon icon={faClock} /> 2mo 2d &nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faUser} /> 4500</h3>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="course-container">
                        <img className="img-fluid" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg" alt="" />
                        <div className="course-content">
                            <h2 className="course-price">$45</h2>
                            <h1>Masterclass in PHP and LRAVEL</h1>
                            <h3><Rating readonly initialRating={4.3} emptySymbol="far fa-star" fullSymbol="fas fa-star"></Rating> (36 reviews)</h3>
                            <br />
                            <h3><FontAwesomeIcon icon={faClock} /> 1mo 15d &nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faUser} /> 3000</h3>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="course-container">
                        <img className="img-fluid" src="https://api.softwarekeep.com/media/nimbus/helpcenter/MS-Office-pack.jpg" alt="" />
                        <div className="course-content">
                            <h2 className="course-price">$45</h2>
                            <h1>Advanced crash course in MS office</h1>
                            <h3><Rating readonly initialRating={4.5} emptySymbol="far fa-star" fullSymbol="fas fa-star"></Rating> (55 reviews)</h3>
                            <br />
                            <h3><FontAwesomeIcon icon={faClock} /> 1mo &nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faUser} /> 5000</h3>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="course-container">
                        <img className="img-fluid" src="https://pesktop.imgix.net/uploads/f6a92e548fbc3145ac8ffc260c500f5a.png?fit=crop&w=700&h=400&auto=format&fm=jpg&mark-w=150&mark-h=40&mark=https://pesktop.imgix.net/css/img/200X200-COLORS.png&q=50&mark-alpha=60" alt="" />
                        <div className="course-content">
                            <h2 className="course-price">$70</h2>
                            <h1>Advanced crash course in MS office</h1>
                            <h3><Rating readonly initialRating={4} emptySymbol="far fa-star" fullSymbol="fas fa-star"></Rating> (30 reviews)</h3>
                            <br />
                            <h3><FontAwesomeIcon icon={faClock} /> 2mo &nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faUser} /> 2350</h3>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Courses;