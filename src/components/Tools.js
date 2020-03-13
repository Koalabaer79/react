import React from 'react'
import Navi from './Navi'
import mainPic from './images/tools.jpg';
import elements from './metaElements';

class Tools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
      return (
        <div>
            <Navi item="Tools"></Navi>
            <div className="imgCont"><img className="mainPic" src={mainPic} alt="Laptop mit Themes für React Websites" /></div>
            <h1>{elements.tools.title}</h1>
        </div>
      );
    }
  }
  
  export default Tools;