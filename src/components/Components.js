import React from "react";
import Navi from "./Navi";
import mainPic from './images/components.jpg';
import elements from "./metaElements";

class Components extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {};
    }
    render() {
      return (
        <div>
          <Navi item="Components"></Navi>
          <div className="imgCont"><img className="mainPic" src={mainPic} alt="React - Components zusammen puzzlen" /></div>
          <h1>{elements.components.title}</h1>
        </div>
      );
    }
  }
  
  export default Components;