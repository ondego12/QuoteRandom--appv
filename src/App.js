import React, {Component} from 'react';
import 'typeface-roboto'; 
import './styles.css';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import QuoteMachine from './components/QuoteMachine';
import Myname from './components/myname';




{/*function App(){

  return(

    <Grid id="quote-box" justify='center' className={this.props.classes.container} container>
      <Grid item>
      <QuoteMachine/>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(App);*/}

const styles ={

  container:{
   
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height: '100vh'
  }
}

class App extends React.Component{

  constructor(props){

    super(props)
  }

  render(){

    return(

      <Grid id="quote-box" justify='center' container className={this.props.classes.container}>
        <Grid xs={5} lg={4} item>

          <QuoteMachine/>
        </Grid>
        <Myname/>
      </Grid>
    )

  }
}

export default withStyles(styles)(App);
