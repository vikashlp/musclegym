import React from "react";
import './App.css';
import bgimage from './images/background.jpg';

const Home = () => {
    return(

        <div className="bg">
        <img  src = {bgimage} alt = 'bgimage'/>
        <h1>Welcome to Muscle Up Gym</h1>
        </div> 
        
       
        
        )
}

export default Home;