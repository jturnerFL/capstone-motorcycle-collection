import React from 'react';
import { Navbar } from '../../components/Navbar';
import pic from '../../assets/images/contactimage.jpg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    background: {
      backgroundImage: `url(${pic})`,
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "absolute",
      zIndex: -1,
      // opacity: 0.5,
    },
    main_text: {
      textAlign: "center",
      position: "relative",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#aa6c1c",
      flexDirection: "column",
      textDecoration: '5px 5px #3b2912',
    },
    container: {
      height:'50%',
      position: 'relative',
      paddingTop:'10px',
      marginTop: '2px',
    },
    h3: {
      backgroundColor: 'black',
    },
  });

export const About = () => {

    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <div className={`${classes.background}`}>
                <div className={`${classes.main_text}`}>
                  <div className={`${classes.container}`}>
                      <h1>About Us</h1>
                      <h3>Hello! My name is Jim Turner, I am currently a strength coach in Jacksonville, Florida <br></br>
                          and have been for the past 17 years. I have been married to the love of <br></br>
                          and we share 5 amazing kids. Even though it has be challenging I love every bit about being websites.<br></br></h3>

                      <h3>Harley Davidson and Indian Motorcycles are my favorite <br></br> 
                          They go above and beyond and have the most esthetic value of any motorcycle in production.<br></br>I believe these motorcycles are the best made
                          and are fun to ride, comfortable with tons of accessories. <br></br>
                          I Love the outdoors and staying in shape. Love my family, God and the good ol' USA!
                      </h3>

                      <h3>
                          I picked a motorcycle collection because I have a heart for the beauty and<br></br>
                          craftmasship involved in making these beautiful powerful machines.<br></br>
                          To showcase these works of art I compiled some of my favorites in hopes to shine a light.<br></br> 
                          There is no better way to Live Free! Destinations are limitless, so ride on!!!
                      </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};