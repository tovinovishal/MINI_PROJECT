import React from "react";
import './Home.css';
import Nav from "./Navbar"; 
import { UseSelector, useSelector } from "react-redux";

function Home(){
    const  email = useSelector((state)=>state.email);
    return(
        <div className="home">
         <Nav/> 
         <div className="home">
            <div className="wel">
            <h1>Welcome <strong>{email}</strong></h1>
            </div>
           
        
            </div>  

            
        </div>    
    );
}
export default Home;