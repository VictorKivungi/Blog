import { Link } from "react-router-dom";

function NavBar(){
    return(

        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <h2>
                <a class="navbar-brand" href="#">BLOG</a></h2>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="link" class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" >Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/Create" >Create</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
</nav>
       
    );
}

export default NavBar;