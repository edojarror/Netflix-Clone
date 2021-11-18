
import InputForm from '../input-form/input-form';
import ButtonSignIn from '../button-sign-in/button-sign-in';
import './sign-in-form.css';

function SignInForm ({currentLanguage}) {
    return (
        <div className="signin-form-container">
            {
                currentLanguage === "english"
                    ? <div className="signin-form-container-2">
                        <div className="signin-form-main">
                            <h1 className="signin-form-title">Sign In</h1>
                            <InputForm  type="email" labelFor="email" textOnLabel="Email or phone number" className="input-email input-form" currentLanguage={currentLanguage} />    
                            <InputForm type="password" labelFor="password" textOnLabel="Password" className="input-password input-form" currentLanguage={currentLanguage} /> 
                            <div className="signin-buttonSignIn-container">
                                <ButtonSignIn className="signinForm-button-signin" buttonText="Sign In" />     
                            </div> 
                            <div className="remember-and-help-container">
                                <input type="checkbox" />
                                <label className="signinForm-checbox-label">Remember me</label>
                                <a href="asdf" className="signinForm-anchor-help">Need Help?</a>
                            </div>      
                        </div>

                        <div className="signin-form-other">
                            <div className="login-with-facebook">
                                <img src="/images/logo/FB-Logo.png" alt="fb-logo" />
                                <span>Login with Facebook</span>
                            </div>
                            <div className="new-user-signup">
                                <p>New to Netflix?</p>
                                <a href="#asdf">Sign up now</a>
                            </div>  
                            <div className="signin-form-other-3">
                                <span>This page is protected by Google reCAPTCHA to ensure you're not a bot</span>
                                <button className="captcha-button">Learn more.</button>
                            </div>
                        </div>
                            
                    </div>
                    : <div className="signin-form-container-2">
                        <div className="signin-form-main">
                            <h1 className="signin-form-title">Masuk</h1>
                            <InputForm  type="email" labelFor="email" textOnLabel="Email atau nomor telepon" className="input-email input-form" currentLanguage={currentLanguage} />    
                            <InputForm type="password" labelFor="password" textOnLabel="Sandi" className="input-password input-form" currentLanguage={currentLanguage} /> 
                            <div className="signin-buttonSignIn-container">
                                <ButtonSignIn className="signinForm-button-signin" buttonText="Masuk" />     
                            </div> 
                            <div className="remember-and-help-container">
                                <input type="checkbox" />
                                <label className="signinForm-checbox-label">Ingat saya</label>
                                <a href="asdf" className="signinForm-anchor-help">Perlu bantuan?</a>
                            </div>     
                        </div>

                        <div className="signin-form-other">
                            <div className="login-with-facebook">
                                <img src="/images/logo/FB-Logo.png" alt="fb-logo" />
                                <span>Masuk dengan Facebook</span>
                            </div>
                            <div className="new-user-signup">
                                <p>Baru di Netflix?</p>
                                <a href="#asdf">Daftar sekarang.</a>
                            </div>  
                            <div className="signin-form-other-3">
                                <span>Halaman ini dilindungi oleh reCAPTCHA Google untuk memastikan kamu bukan bot.</span>
                                <button className="captcha-button">Pelajari selengkapnya.</button>
                            </div>
                        </div> 
                    </div>
            }
        </div>
        
    )
}

export default SignInForm;