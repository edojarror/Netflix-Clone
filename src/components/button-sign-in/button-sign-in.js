import './button-sign-in.css';

export default function ButtonSignIn ({className, buttonText}) {
    return (
        <button className={className}>{buttonText}</button>
    )
}