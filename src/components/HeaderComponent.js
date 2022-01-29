

export default function HeaderComponent(){

    return (
        <header id="navigation" className="navbar-fixed-top animated-header">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    
                    <h1 className="navbar-brand">
                        <a href="#body"><img src="assets/img/fundWallet-logos_transparent.png" height="50" width="200" alt="fundwallet"/></a>
                    </h1>
                </div>

                <nav className="collapse navbar-collapse navbar-right" role="navigation">
                    <ul id="nav" className="nav navbar-nav menu">
                        <li className="active"><a href="#top">Home</a></li>
                        <li className=""><a href="#features">About Us</a></li>
                        <li className=""><a href="#portfolio">Services</a></li>
                        <li className=""><a href="#team">Team</a></li>
                        <li className=""><a href="#pricing-table">Social Impact</a></li>
                        <li className=""><a href="#blog">Blog</a></li>
                        <li className=""><a href="#testimonial">Login/Register</a></li>
                        <li className=""><a href="#contact-form">Contact</a></li>
                    </ul>
                </nav>
                
            </div>
    </header>
    )
}


