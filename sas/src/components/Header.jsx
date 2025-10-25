import sasLogo from "../images/sas-logo.png";
import "../styles/header.css";
import {useState} from 'react';

function Header(){
    const [isShown, setIsShown] = useState(false);
    return (
        <div className="header-container">
            <img src = {sasLogo} alt="SAS Logo" className="sas-logo"/>
            <div className="website-title" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                { isShown ? <h1><b>F</b>un <b>I</b>deas <b>O</b>n <b>N</b>ight-Out <b>A</b>ctivities</h1> :  <h1>F.I.O.N.A</h1>}
            </div>
        </div>
    )
}

export default Header;