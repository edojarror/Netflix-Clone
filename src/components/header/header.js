import './header.css';
import SelectLanguage from '../select-language/select-language';
import InputEmail from '../input-email/inputEmail';

function Header ({handleSelectLanguage, currentLanguage}) {
    return (
        <div className="header-container image-color-overlay" style={{backgroundImage: "url('/images/misc/header-id.jpg')"}}>

            <div className="header-navbar">
                <img src="images\logo\Netflix_Logo_RGB.png" alt="netflix-logo" height="68px" className="header-logo" />
                <div className="header-navbar-select-and-button">
                    <SelectLanguage handleSelectLanguage={handleSelectLanguage} currentLanguage={currentLanguage} />
                    {
                        currentLanguage === "english" 
                            ? <button className="signin-button"> Sign In</button> 
                            : <button className="signin-button"> Masuk</button> 
                    }                       
                </div>                   
            </div>
            
            {
                currentLanguage === "english" 
                    ?   <div className="header-sub-container">
                            <h1 className="header-sub-container-title">Unlimited movies, TV shows, and more.</h1>
                            <h3 className="header-sub-container-subtitle">Watch anywhere. Cancel anytime.</h3>                
                        </div>
                    :  <div className="header-sub-container">
                            <h1 className="header-sub-container-title">Film, acara TV tak terbatas, dan lebih banyak lagi.</h1>
                            <h3 className="header-sub-container-subtitle">Tonton di mana pun. Batalkan kapan pun.</h3>                
                        </div>
            }
            
            <div className="header-input-email">
                <InputEmail isHeaderInputEmail="true" currentLanguage={currentLanguage} />    
            </div>
            
        </div>
    )
}

export default Header;