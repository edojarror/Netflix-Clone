
import { Link } from "react-router-dom";
import LogoNetflix from "../../components/logo/logo";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import Footer from "../../components/footer/footer";
import './sign-in-page.css';

export default function SignInPage ({ handleSelectLanguage, currentLanguage }) {
    return (
        <div className="signin-container" style={{backgroundImage: "url(/images/misc/header-id.jpg)"}}>
            <div className="signin-logo-container">
                <Link to="/">
                    <LogoNetflix />
                </Link>  
                <SignInForm currentLanguage={currentLanguage} />  
                <Footer currentLanguage={currentLanguage} handleSelectLanguage={handleSelectLanguage} isSignInPageFooter="true" />
            </div>
            
            
        </div>
    )
}