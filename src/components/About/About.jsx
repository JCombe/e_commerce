import React from 'react'
import useStyles from './styles';
import { Typography, TextField } from '@material-ui/core';


const About = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className={classes.textBox}>
            <Typography gutterBottom variant="h5" component="h2" >
            What is Lorem Ipsum?
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            </div>
        </main>
    )
}

export default About
