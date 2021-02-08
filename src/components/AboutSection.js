import React from 'react';
import '../App.css';
import './AboutSection.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 100,
    minHeight: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#2a2a2a',
    fontFamily: 'Lato',
  },
  subtitle: {
    textAlign: 'center',
    color: '#494949',
    fontSize: 16,
    fontFamily: 'Source Sans Pro',
    marginLeft: 40,
    marginRight: 40,
  },
  pos: {
    marginBottom: 12,
  },
});

function AboutSection() {

  const classes = useStyles();

  function AboutRow(){
    return (
      <React.Fragment>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
          <Card className={classes.root} elevation={20} style={{backgroundColor: "#d6d6d6"}}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                Web Development
              </Typography>
              <i className='fa fa-code icon'/>
              <Typography className={classes.subtitle} component="p">
                We develop websites and web apps to fit your needs. We build what you want and help maintain your product throughout its lifecycle.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
          <Card className={classes.root} elevation={20} style={{backgroundColor: "#d6d6d6"}}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                Mobile App Development
              </Typography>
              <i className='fa fa-mobile-alt icon'/>
              <Typography className={classes.subtitle} component="p">
                We develop cross-platform mobile apps so that we can get your product in as many hands as possible. 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
          <Card className={classes.root} elevation={20} style={{backgroundColor: "#d6d6d6"}}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                Custom Software
              </Typography>
              <i className='fa fa-terminal icon'/>
              <Typography className={classes.subtitle} component="p">
                We create custom software to fit your business's needs. We take your ideas and create a reliable solution. 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className='about'>
      <h2 className='about-header'>About LineBreak</h2>
      <p className='about-header-p'>LineBreak Software is a small custom software development company based in Oklahoma City, Oklahoma. Founded in 2021, LineBreak aims to deliver high quality software.</p>
      <Grid container alignItems='center' justify='center' item xs={12} spacing={3}>
        <AboutRow />
      </Grid>
    </div>
  );
}

export default AboutSection;