import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" class="nav-link"><img src={require("../logo.svg")} alt="logo" width="50px"/>Movie</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link to="/" class="nav-link">Home<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/profile" class="nav-link">Profile</Link>
      </li>
      <li class="nav-item">
        <Link to="/login" class="nav-link">Login</Link>
      </li>
    </ul>
  </div>
</nav>
        )
    }
}
export default Header;