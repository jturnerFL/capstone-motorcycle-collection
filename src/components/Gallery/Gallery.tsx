import React from 'react';
import { Navbar } from '../../components/Navbar';
import image1 from '../../assets/images/1999IndianChief.png';
import image2 from '../../assets/images/2016HarleyRoadKingCustom.png';
import image3 from '../../assets/images/2016IndianChief.png';
import image4 from '../../assets/images/2014HDRoadKingLow.png';
import image5 from '../../assets/images/2016IndianScoutCustom.png';
import image6 from '../../assets/images/2018IndianSpringFieldDarkHorse.png';
import image7 from '../../assets/images/2019Harley883.png';
import image8 from '../../assets/images/2022IndianBobber.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  background: {
    backgroundImage: `linear-gradient(62deg, #682407 0%, #F7CE68 100%)`,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    zIndex: -1,
    padding: '5px',
    paddingTop: '10px'
  },
  main_text: {
    textAlign: "center",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "Black",
    flexDirection: "column",
  },
  container: {
    border: '3px Black',
    padding: '20px',
    width: '100%',
    heigth:'100%',
    marginTop: '140%',
    marginBottom:'10px'
  },
  h1: {
    textDecorationStyle: 'solid',
    paddingBottom: '5px',
    textShadow: '1px 1px 3px #9c928a',
    border: '5px black',
  },

});


export const Gallery = () => {
    const classes = useStyles();
    return (
      <>
        <Navbar />
        <div className={`${classes.background}`}>
          <div className={classes.main_text}>
            <div className={`${classes.container}`}>
              <h1>Bike Gallery</h1>

                  <img src={ image1 }width={700} height={500} className="img-thumbnail" alt="1999 Indian Chief"></img>
                  <h3> 1999 Indian Chief</h3>
                  <img src={ image2 } width={700} height={500} className="img-thumbnail" alt="2016 Custom Harley Davidson"></img>
                  <h3>2016 Custom Harley Davidson Road King</h3>
                  <img src={ image3 } width={700} height={500} className="img-thumbnail" alt="2016 Indian Chief"></img>
                  <h3>2016 Indian Chief</h3>
                  <img src={ image4 } width={700} height={500} className="img-thumbnail" alt="2014 Harley Davidson"></img>
                  <h3>2014 Harley Davidson Road King Low Rider</h3>
                  <img src={ image5 } width={700} height={500} className="img-thumbnail" alt="2019 Indian Scout Custom"></img>
                  <h3>2016 Custom Indian Scout</h3>
                  <img src={ image6 } width={700} height={500} className="img-thumbnail" alt="2018 Indian Springfield Dark Horse"></img>
                  <h3>2018 Indian Springfield Dark Horse</h3>
                  <img src={ image7 } width={700} height={500} className="img-thumbnail" alt="2019 Harley Davidson 883"></img>
                  <h3>2022 Harley Davidson 883</h3>
                  <img src={ image8 } width={700} height={500} className="img-thumbnail" alt="2022 Indian Bobber"></img>
                  <h3>2022 Indian Bobber</h3>
            </div>
          </div>
        </div>
      </>
    );
  };
