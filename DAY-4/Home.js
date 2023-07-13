import React from "react";
import '../pages/Home.css';
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="navbar">
            <div className="nav">
                <Link to="/Signup" ><button className="a">LOGOUT</button></Link>
                <Link to="/about"><button className="a">ABOUT US</button></Link>
                <Link to="/Simba"><button className="a">CONTACT US</button></Link>
            </div>
        </div>    
    );
}
export default Home;