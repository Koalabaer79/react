import React from 'react'
import Navi from './Navi'
import mainPic from './images/entwicklung.jpg';
import elements from './metaElements';

class Entwicklung extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
      return (
        <div>
          <Navi item="Entwicklung"></Navi>
          <div className="imgCont"><img className="mainPic" src={mainPic} alt="React - running man" /></div>
          <h1>{elements.entwicklung.title}</h1>
        </div>
      );
    }
  }
  
  export default Entwicklung;