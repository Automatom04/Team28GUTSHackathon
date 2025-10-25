import Header from '../components/Header';
import "../styles/landing.css";
function Landing(){
    return ( <div>
        <Header/>
        <div className = "landing-container">
            <h2>Welcome to the SAS Staff Night Out Planner! Input your team's preferences below to generate your suggested night out!</h2>
        </div>
    </div> )
}

export default Landing;