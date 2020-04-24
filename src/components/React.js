import React from 'react'
import Navi from './Navi'
import Footer from './Footer';
import mainPic from './images/react.jpg';
import elements from './metaElements';
import {Helmet} from 'react-helmet';

class ReactInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
      return (
        <div className="mainCont">
          <Helmet>
            <title>{elements.react.title}</title>
            <meta name="description" content={elements.react.description} />
          </Helmet>
          <Navi item="React" />
          <div className="imgCont"><img className="mainPic" src={mainPic} alt="React - Arbeitsplatz für React Programmierung" /></div>
          <h1>{elements.react.title}</h1>
          <p>{elements.react.description}</p>
          <h2>React Website mit SEO</h2>
          <hr />
          <p>Um professionelle und funktionierende Suchmaschinenoptimierung zu betreiben ist es nötig, die Titel, Überschriften, Texte und Bilder harmonisch miteinander zu verweben. Das geht aber nur, wenn die Inhalte der Webseite statisch angezeigt werden und die Crawler der Suchmaschine diese Inhalte auch finden kann. Eine echte React Website muss demnach ebenso alle Aspekte der Suchmaschinenoptimierung aufgreifen, um überhaupt gefunden werden zu können. Das macht eine React Website mit SEO zu einem anspruchsvollen Projekt!</p>
          <div className="darkCont">
            <div className="darkIns">
              <h2>React Website ohne SSR</h2>
              <hr />
              <p>Die Inhalte zum Rendern werden in folgendem Container <b>'root'</b> nicht angezeigt, sondern erst, wenn das Javascript-Konstrukt es auf dem Client-Rechner erzeugt. Die Anzeige des Seitenquelltexts deckt auf, dass die Inhalte nicht statisch gerendert wurden.</p>
              <div className="code">
                &nbsp;<span className="tag">&lt;div</span>&nbsp;<span className="norm">id</span><span className="tag">="</span><span className="param">root</span><span className="tag">"&gt;&lt;/div&gt;</span>&nbsp;
              </div>
            </div>
            <div className="darkIns">
              <h2>React Website mit SSR</h2>
              <hr />
              <p>React Website mit SSR <b>'Server Side Rendering'</b> ist speziell für die Auffindbarkeit in den den Suchmaschinen geeignet, weil die Inhalte schon vorher auf dem Server gerendert wird und die Suchmaschine die Überschriften, Texte und Bilder für das Ranking heranziehen kann.</p>
              <div className="code">
                &nbsp;<span className="tag">&lt;div</span>&nbsp;<span className="norm">id</span><span className="tag">="</span><span className="param">root</span><span className="tag">"&gt;</span><i>Inhhalte für die Suchmaschine, wie eine statische Website</i><span className="tag">&lt;/div&gt;</span>&nbsp;
              </div>
            </div>
          </div>
          <h2>Auffindbarkeit von React Webseiten in Suchmaschinen</h2>
          <hr />
          <p>Getestet wird das tatsächliche Ranking dieser Website in den einschlägigen Suchmaschinen und dessen Auffindbarkeit. Am besten geeignet sind natürlich statische Webseiten, welche mit gezielten SEO-Inhalten und perfekter Harmonie zwischen den Meta-Tags und den Inhalten, schlankem Design und ohne aufgeblasene Scripts auftreten. Der Versuch dieser Webseite ist, ob eine dynamische Webseite gerendert von Javascripten dabei mithalten kann. Nimmt Google sie überhaut auf und kann man sie durch die Suche nach dem '<b>Title</b>' überhaupt finden?</p>
          <h2>Vorteile und Nachteile von React</h2>
          <hr />
          <p>Folgend führe ich die Vorteile und Nachteile einer React Website auf. Vor dem Start sollte man abwägen, für welchen Einsatz Ihre Webseite gebraucht wird und was Sie mit dieser Seite erreichen wollen.</p>
          <div className="darkCont">
            <div className="darkIns">
              <h2>Vorteile</h2>
              <hr />
              <ul className="ul_green">
                <li>Die Entwicklung einzelner Module zur vielfachen Verwendung.</li>
                <li>Individueller Aufbau eigener Komponenten nach Bedarf.</li>
                <li>Externe Daten nutzen um dynamische Inhalte zu generieren.</li>
                <li>Hohe Performance bei Komponenten auf der Webseite</li>
              </ul>
            </div>
            <div className="darkIns">
              <h2>Nachteile</h2>
              <hr />
              <ul className="ul_red">
                <li>Benötigt teils mehr Code als andere Programmiermethoden.</li>
                <li>Schneller Wandel und wenig Dokumentation (selbst erarbeiten).</li>
                <li>Komplizierte Installation auf dem Server durch SSR.</li>
                <li>Server Side Rendering nötig um SEO zu garantieren.</li>
              </ul>
            </div>
          </div>
          <p>Durch die hohe dynamik mittels Variablen und Funktionen lassen sich sehr komplexe und schnelle Apps generieren. Wenn man den anfänglichen Aufwand in Kauf nimmt, kann sehr viel mit einer React Website mit SEO erreichen. Einfach einzulesende JSON Daten können unkompliziert verarbeitet werden. Eine reine Informationsseite ist hingegen nicht für React geeignet, denn dafür ist letztendlich den Aufwand zu hoch.</p>
          <h2>Testergebnisse dieser Website</h2>
          <hr />
          <p>Zurzeit liegen noch keine Ergebnisse aus den Suchmaschinen vor. Aber sobald die React Website mit SEO ein wenig gefestigt ist, werden hier die Daten aufgeführt!</p>
          <Footer />
        </div>
      );
    }
  }
  
  export default ReactInfo;