export const Container = ({children}) => {
    return <div className="collapse navbar-collapse d-flex" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            {children}
        </div>
    </div>
}