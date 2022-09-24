import React, { Component } from "react";
import '../styles/NavBar.css'
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navigation">
            <h1 className="title">Welcome User</h1>
            <div className="button-container">
            <button className="">Update</button>
            <button className="">Log out</button>
            </div>

          {/* <a className="navbar-brand" href="#"> */}
            {/* <h1>Total Items <span className="badge badge-secondary">{this.props.totalItems}</span></h1> */}
          {/* </a> */}

        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;