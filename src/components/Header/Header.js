import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Header = () => {
    let history = useHistory();

    // Handling click on link
    const handleHome = () => {
        history.push("/home")
    }
    const handleAboutUS = () => {
        history.push("/about")
    }
    const handleCourse = () => {
        history.push("/course")
    }
    const handleContactUS = () => history.push("/contact");
    return (
        <div>
            {/* Navigation Bar */}
            <AppBar position="static">
                <Toolbar sx={{ p: 2 }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        SkillUP
                    </Typography>
                    <Button onClick={handleHome} color="inherit">Home</Button>
                    <Button onClick={handleAboutUS} color="inherit">About US</Button>
                    <Button onClick={handleCourse} color="inherit">Courses</Button>
                    <Button onClick={handleContactUS} color="inherit">Contact US</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;