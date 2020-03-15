import React from 'react'
import Navi from './Navi'
import mainPic from './images/arbeiten.jpg';
import elements from './metaElements';
import {Helmet} from 'react-helmet';

class Arbeiten extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
      return (
        <div>
          <Helmet>
            <title>{elements.arbeiten.title}</title>
            <meta name="description" content={elements.arbeiten.description} />
          </Helmet>
            <Navi item="Arbeiten"></Navi>
            <div className="imgCont"><img className="mainPic" src={mainPic} alt="Mac für das Arbeiten mit React" /></div>
            <h1>{elements.arbeiten.title}</h1>
        </div>
      );
    }
  }
  
  export default Arbeiten;