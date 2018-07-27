import React, { Component} from 'react';
import axios from 'axios';
import Layout from './Layout';



class UserWelcome extends Component{
    
     constructor(){
       super();
         this.state = {
             email: 'Sowmya',
             password: '',
         }
     }
    
    
    
    
  
    
    
    
    
    
    
    
    
    render(){

         //const {un} = this.loggedInUser
         //var pageTitle = 'Welcome'

        return(
        
               
       <div className="container">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           
            <h2> Welcome</h2>
                  {/* <Layout loggedInUser={this.props.loggedInUser.email}></Layout> */}
            </div>
        
        );
    }
}

export default UserWelcome;
