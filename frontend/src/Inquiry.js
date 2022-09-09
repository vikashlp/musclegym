import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const Inquiry = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();
    
    const collectdata = async ()=>{
        console.warn(name,email,feedback);
        let result = await fetch('http://localhost:5000/gymnasium',{
        method: 'post',
        body: JSON.stringify({name,email,feedback}),
        headers:{'Content-Type':'application/json'},
    });
              result = await result.json();
              console.warn(result);

              if(result){
                navigate('/')
              }
    }

    return(
        <div className='register'>
            <h2>Feedback</h2>
             
             <input className='inputbox' type = 'text' placeholder = 'Enter your name' 
            value = {name} onChange = {(e) => setName(e.target.value)}/>
           
            <input className='inputbox' type = 'email' placeholder = 'Enter your email'
            value = {email} onChange = {(e) => setEmail(e.target.value)}/>
           
           <input className='inputbox' type = 'textarea' placeholder = 'Give your feedback' value = {feedback} onChange = {(e) => setFeedback(e.target.value)}/>
           
            <button className='appbutton' type ='button' onClick={collectdata}>Sign up</button>
            </div>
           
        
    )
}

export default Inquiry;