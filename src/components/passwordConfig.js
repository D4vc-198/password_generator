import "./../styles/passwordConfig.css"

const PasswordConfig = () => {
    
    return (
        <div className="password-config-container">
            <p>Password Length: 0</p>
            <input className="password-select-length" type="range" min="0" max="100" />
        </div>
    )
}

export default PasswordConfig