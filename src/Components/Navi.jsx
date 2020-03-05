import React from 'react';
import logo from './images/logo.png';
import data from './Pages';

function Navi() {
    return (
        <div>
            <ul className="nav">
                <li className="nav_el"><img className="logo" src={ logo } alt="Logo Hogarth WW Digital Documentation" /></li>   
                {data.map(function (item, idx) {
                    return <li className="nav_el" key={idx}><a href={item.path}>{item.display}</a></li>
                })}
            </ul>
            
        </div>
    )    
}

export default Navi;