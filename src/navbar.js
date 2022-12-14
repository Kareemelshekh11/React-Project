import { Link } from "react-router-dom";
import { Component } from "react";



class Navbar extends Component{


    render(){

     return <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MTA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/movies">Movies</Link>
        <Link className="nav-link" to="/tv">Tv</Link>
      </div>
    </div>
  </div>
</nav>

     </div>

    }
}

export default Navbar;