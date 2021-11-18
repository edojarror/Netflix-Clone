import footerDataEN from '../../utility/footer-en.json';
import footerDataID from '../../utility/footer-id.json';
import signinPageDataEN from '../../utility/signin-en.json';
import signinPageDataID from '../../utility/signin-id.json';
import SelectLanguage from '../select-language/select-language';
import './footer.css';

export default function Footer ({ currentLanguage, isHomePageFooter, handleSelectLanguage, isSignInPageFooter }) {
    return (
        <div className={isHomePageFooter 
            ? "footer-container homepage-footer-container" 
            : "signin-footer-container"
        }>
            <div className={isHomePageFooter ? "footer-container-2" : "signin-container-2"}>
                <h1 className={isHomePageFooter ? "title" : "signin-title"}>{ currentLanguage === "english" ? "Questions? " : "Ada pertanyaan? " }
                    <a href="asdf">{ currentLanguage === "english" ? "Call 007-803-321-2130" : "Hubungi 007-803-321-2148" }</a>
                </h1>  

                {
                    isHomePageFooter 
                        ?   <div className="footer-ul-container">
                                <ul className="footer-ul"> 
                                    { currentLanguage === "english"
                                        ? footerDataEN.map(data => 
                                            <li key={data.id} > 
                                                <a href="asdf">{data.text}</a> 
                                            </li>)
                                        : footerDataID.map(data => 
                                            <li key={data.id} > 
                                                <a href="asdf">{data.text}</a> 
                                            </li>)
                                    }
                                </ul>
                            </div>
                        :   <div className="signin-footer-ul-container">
                                <ul className="signin-footer-ul"> 
                                    { currentLanguage === "english"
                                        ? signinPageDataEN.map(data => 
                                            <li key={data.id} > 
                                                <a href="asdf" className="signin-footer-anchor">{data.text}</a> 
                                            </li>)
                                        : signinPageDataID.map(data => 
                                            <li key={data.id} > 
                                                <a href="asdf" className="signin-footer-anchor">{data.text}</a> 
                                            </li>)
                                    }
                                </ul>
                            </div>
                }
                
                {
                    isHomePageFooter 
                        ?   <div className="footer-select-subtitle">
                                <SelectLanguage isBottomSelect="true" handleSelectLanguage={handleSelectLanguage} currentLanguage={currentLanguage} />
                                <h1 className="subtitle">Netflix Indonesia</h1> 
                            </div>
                        :   <div className="signin-select-subtitle">
                            <SelectLanguage isSignInPageFooter="true" handleSelectLanguage={handleSelectLanguage} currentLanguage={currentLanguage} />
                    </div>
                }   
            </div>
        </div>
    )
}