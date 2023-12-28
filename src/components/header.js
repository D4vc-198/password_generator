const Header = (props) => {
    const {title, subtitle} = props
    
    return (
        <>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
        </>
    )
}

export default Header