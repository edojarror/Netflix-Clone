
import './select-language.css';

function SelectLanguage ({isBottomSelect, handleSelectLanguage, currentLanguage, isSignInPageFooter}) {
    return (
        <select 
            name="language" 
            className={isBottomSelect ? "footer-dropdown" : isSignInPageFooter ? "signin-dropdown" : "header-dropdown"}
            defaultValue={currentLanguage}
            onChange={handleSelectLanguage}>    
            <option value="english">English</option>
            <option value="indonesia">Bahasa Indonesia</option>
        </select>    
    )
}

export default SelectLanguage;