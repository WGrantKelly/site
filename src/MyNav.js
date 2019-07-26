import React from 'react';
import './App.css';
class MyNav extends React.Component {
    render(){
        return(
            <div id ="navBar">
                <div class = "col-2">
                    <img src="bracks.png" id="navicon" alt="navicon" />
                </div>
                <div class = "col-2">About</div>
                <div class = "col-2">Code</div>
                <div class = "col-2">Music</div>
                <div class = "col-2">Blog</div>
                <div class = "col-2">Socials</div>
            </div>
        );
    }
}
export default MyNav;


    
