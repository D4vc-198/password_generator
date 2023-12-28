const Header = (props) => {
    const {title, subtitle} = props
    
    return (
        <>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </>
    )
}

export default Header