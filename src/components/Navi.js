import React from 'react';
import data from './navElements';
        


export default class Navi extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

        
    toggleClass() {
        var x = document.getElementById("wrapper");
        if (x.className === "wrapper") {
            x.className += " responsive";
        } else {
            x.className = "wrapper";
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.update);
    }
    
    update() {
        var x = document.getElementById("wrapper");
        var w = window.innerWidth;
        if (w > "550" && x.className === "wrapper responsive") {
            x.className = "wrapper";
        } 
    };

    render() {
        return (
            <div id="nav">
                <svg onClick={this.toggleClass} id="btn" data-name="btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.768 36.764"><defs></defs><title>nav_btn</title><rect className="cls-1" width="41.768" height="5.6167"/><rect className="cls-1" y="10.3824" width="41.768" height="5.6167"/><rect className="cls-1" y="20.7648" width="41.768" height="5.6167"/><rect className="cls-1" y="31.1473" width="41.768" height="5.6167"/></svg>
            
                <ul id="wrapper" className="wrapper">
                    {data.map((elem,idx) => {
                        let container = "c_"+idx;
                        let wrap = "w_"+idx;
                        let classTake = "";
                        let path = "/"+elem.path
                        if(elem.name === this.props.item ){
                            classTake = "container active";
                        }else{
                            classTake = "container";
                        }

                        return <li key={idx} className={classTake} id={container}>
                            <a href={path} title={elem.title}>
                                <div className="logo-wrap" id={wrap} dangerouslySetInnerHTML={{ __html: elem.content }} />
                            </a>
                        </li>
                    })}
                    <li className="container last" id="c_5">
                        <a href="https://www.u-php.de" title="Lars Urban at u-php">
                            <div className="logo-wrap" id="w_5">
                                <span className="letter el_0">U</span>
                                <span className="letter el_1">-</span>
                                <span className="letter el_2">P</span>
                                <span className="letter el_3">H</span>
                                <span className="letter el_4">P</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}