import React from 'react';
import { Navbar } from "../Navbar";
import image from '../../assets/images/contactimage.jpg';
import { makeStyles } from "@material-ui/core";
import me from '../../assets/images/me.jpg';

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${image})`,
    width: "100%",
    height: "200%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    zIndex: -1,
  },
  main_text: {
    textAlign: "center",
    position: "relative",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    flexDirection: "column",
  },
  img: {
    borderImageWidth: '5px 5px #b69a33'
  }
});

export const Contact = () => {
    const classes = useStyles();
    return (
      <div>
        <Navbar />
        <div className={`${classes.background}`}>
          <div className={classes.main_text}>
          <img src={ me } className="img-fluid" alt="..."></img>
        <h3>Contact Me directly</h3>
        <h3> <a href='https://github.com/jturnerFL'>Git Hub</a> <br></br>
            <a href='https://www.linkedin.com/in/james-turner-nsca'>Linkedin </a> <br></br>
            <a href='mailto:jimturner@fullarmorinc.com'>Email </a> <br></br>
            </h3>          
        </div>
        </div>
      </div>
    );
  };
