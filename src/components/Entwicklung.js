import React from 'react'
import Navi from './Navi'
import mainPic from './images/entwicklung.jpg';
import elements from './metaElements';
import {Helmet} from 'react-helmet';

class Entwicklung extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
      return (
        <div className="mainCont">
          <Helmet>
            <title>{elements.entwicklung.title}</title>
            <meta name="description" content={elements.entwicklung.description} />
          </Helmet>
          <Navi item="Entwicklung"></Navi>
          <div className="imgCont"><img className="mainPic" src={mainPic} alt="Entwicklung - Arbeitsplatz für React React Entwicklung" /></div>
          <h1>{elements.entwicklung.title}</h1>
          <p>{elements.entwicklung.description}</p>
          <h2>Entwicklung einer React-Website</h2>
          <p>Die Entwicklung einer SEO gerechten Webseite in React ist umfangreich und erfordert Wissen über Javascript. Der Anteil an HTML ist nur peripher, natürlich wird keine Webseite ohne HTML Struktur gibt es keine Webseite, jedoch umfasst die Programmierung mehr Kenntnisse in Javascript als in HTML.<br />Der Aufbau der Programierten Webseite gliedert sich in einem HTML Template, SCSS Stylesheets und die benötigten Komponenten, die entweder ganze Content-Seiten oder einzelne Elemente der Seite beinhalten können.</p>
        </div>
      );
    }
  }
  
  export default Entwicklung;