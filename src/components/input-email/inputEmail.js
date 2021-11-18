import InputForm from '../input-form/input-form';
import './inputEmail.css';

function InputEmail ({isHeaderInputEmail, currentLanguage}) {
    return ( 
        <div className={isHeaderInputEmail ? "header-inputEmail-container" : "accordion-inputEmail-container"}>
            <h3 className={isHeaderInputEmail ? "header-inputEmail-title" : "accordion-inputEmail-title"}>
                {currentLanguage === "english" 
                    ? "Ready to watch? Enter your email to create or restart your membership." 
                    : "Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu."} 
            </h3>
            <div className={isHeaderInputEmail ? "header-inputEmail-and-button" : "accordion-inputEmail-and-button"}>
                <InputForm 
                    type="email" 
                    size="50" 
                    labelFor="email"
                    textOnLabel={currentLanguage === "english" ? "Email address" : "Alamat email"} 
                    className={isHeaderInputEmail 
                        ? "header-subscribe-email" 
                        : "accordion-subscribe-email" } 
                />
                {/* <input type="email" size="50" placeholder={currentLanguage === "english" ? "Email address" : "Alamat email"} className={isHeaderInputEmail ? "header-subscribe-email" : "accordion-subscribe-email" }></input> */}
                <button className={isHeaderInputEmail ? "header-subscribe-button" : "accordion-subscribe-button" }>{currentLanguage === "english" ? "Get Started" : "Mulai"}</button>    
            </div>
        </div>
        
    )
}

export default InputEmail;