import React from 'react';
import './App.css';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      dividedNum: 1
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event){
    if((this.state.num/30)>this.state.dividedNum){
      document.getElementById("mainBox").style.setProperty('--gradientColor', this.getRandomColor());
      this.setState({
        dividedNum : this.state.dividedNum+1
      });
    }
    console.log(this.state.num);
    console.log(this.state.dividedNum);
    this.setState({
      num : this.state.num+1
    });
  }


  render () {
    return (
      <div id="wrapper">
        <div className="bigBox">
  
            <div className="sideBox">
                <div className="bannerBox">
                        <div className="bio">
  
                        </div>
                        <div className="biotail">
                          <div className="biotailtriangles" id="triangleLeft">
  
                          </div>
                          <div className="biotailtriangles" id="triangleRight">
  
                          </div>
                        </div>
                </div>                    
            </div>
            <div id="mainBox">
                <div className = "mainContent">
                    
                    Hey Whatsup its me boi
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
                <div className = "mainContent">
                    
                    shut up lil bih
  
                </div>
  
            </div>
        </div>            
      </div>
    );
  }
}


