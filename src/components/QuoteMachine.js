import React from 'react'
import Button from '@material-ui/core/Button';
import { Typography, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'; 
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'typeface-roboto';


const styles2 ={

    author:{
        
        justifySelf:'flex-end',
        alignSelf:'flex-end',
        color:'blue'
    },
    insider:{

        display:'flex',
        flexDirection:'column',
    
    },

    myquotes:{
        fontFamily:"Roboto",
        fontSize:30
    },

    lower:{

        width:'100%',
        display:'flex',
        justifyContent:'space-around'
    }



}

class QuoteMachine extends React.Component{

    constructor(props){

      super(props);
      this.state={

        quotes:[],
        selectedQuoteIndex: null,
      }

    this.RamdomNumber=this.RamdomNumber.bind(this)
    this.nextQuoteClickHandler=this.nextQuoteClickHandler.bind(this)

    }


    // will use a broewser Api called fetch
    //sends a get request to a website of our choice ang gets the data needed

    componentDidMount(){
      fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json').then(data => data.json()).then(quotes => this.setState({quotes:quotes}, this.nextQuoteClickHandler))
        
      
    }

   get selectedQuote(){

    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){

      return ;
    }

    
      return this.state.quotes[this.state.selectedQuoteIndex]
  
   }


  nextQuoteClickHandler(){
    

    this.setState({
      selectedQuoteIndex:this.RamdomNumber()
    
    });

  }


  RamdomNumber(){
  
      if (!this.state.quotes.length ){
        return ;
      }
      
      return Math.floor(Math.random() * this.state.quotes.length - 1)
  
  }


  render(){


    if(this.selectedQuote){

        return (

    

            <Card>
                <CardContent>
              
                
                <Typography insider className={this.props.classes.insider}>
                    <div id='text' myquotes className={this.props.classes.myquotes}>
                    {this.selectedQuote.quote}
                    </div>

                    <div id='author' author className={this.props.classes.author}>
                    - {this.selectedQuote.author}
                    </div>
                 
                </Typography>
                    
                
                
                    <br/>
        
                </CardContent>
        
                <CardActions lower className={this.props.classes.lower}>
                
        
                <IconButton
                    id='tweet-quote'
                    target='_blank'
                    href={`https://twitter.com/intent/tweet?text=${this.selectedQuote.quote}&hashtags=@ondego12`}>
                
                    <FontAwesomeIcon icon={faTwitter} size='md'></FontAwesomeIcon>
                </IconButton>


                <Button id="new-quote" size='small' onClick={this.nextQuoteClickHandler}>NEXT Quote</Button>
                </CardActions>
              
            </Card>
        )   
        }

    }
    
}


export default withStyles(styles2)(QuoteMachine);