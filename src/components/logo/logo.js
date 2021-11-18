
import './logo.css';

export default function LogoNetflix ({usedAtHeader}) {
    return (
        <div>
            {
            usedAtHeader === "true"
                ? <img src="images\logo\Netflix_Logo_RGB.png" alt="netflix-logo" height="68px" className="header-logo" /> 
                : <img src="images\logo\Netflix_Logo_RGB.png" alt="netflix-logo" height="90px" className="signin-logo" />
            }  
        </div>
        
           
    )
}
