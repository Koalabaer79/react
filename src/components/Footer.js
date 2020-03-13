import React from 'react'
import '../scss/Footer.scss'

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="footer">
                <div className="foot_int">
                    <p><a href="https://www.u-php.de">Lars Urban / U-PHP</a></p>
                    <hr />
                </div>
                <div className="foot_int">
                    <p><a href="https://www.u-php.de/datenschutz">Datenschutz</a></p>
                    <hr />
                </div>
                <div className="foot_int">
                    <p><a href="https://www.u-php.de/impressum">Impressum</a></p>
                    <hr />
                </div>
            </div>
        )
    }
}