import React from 'react';
import {Link} from 'react-router-dom';

class MyNavbar extends React.Component{
  render(){
    return(
      <div style={{paddingBottom:"40px"}}>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light" style={{padding:"8px 60px"}}>
          {
            window.location.href === "http://localhost:3000/" ?
            <Link className="nav-link" to="/" style={{color:"black", outline:"1px solid black"}}>
              {/*<img src="https://i.ibb.co/qWBs0fP/profile-Picture.jpg" alt="sukhvir singh" height="40px" width="40px" />*/}
              OVERVIEW
            </Link>
            :
            <Link className="nav-link" to="/" style={{color:"black"}}>
              {/*<img src="https://i.ibb.co/qWBs0fP/profile-Picture.jpg" alt="sukhvir singh" height="40px" width="40px" />*/}
              OVERVIEW
           </Link>
          }
          <div style={{position:"absolute", right:"0", padding:"8px 60px"}}>
            <ul className="navbar-nav">
              <li className="nav-item" style={{margin:"0 .5em"}}>
                {
                  window.location.href.indexOf("skills")> -1 ?
                  <Link className="nav-link" to="/skills" style={{color:"black", outline:"1px solid black"}}>SKILLS</Link>
                  :
                  <Link className="nav-link" to="/skills" style={{color:"black"}}>SKILLS</Link>
                }
              </li>
              <li className="nav-item" style={{margin:"0 .5em"}}>
                {
                  window.location.href.indexOf("experience") > -1 ?
                  <Link className="nav-link" to="/experience" style={{color:"black", outline:"1px solid black"}}>EXPERIENCE</Link>
                  :
                  <Link className="nav-link" to="/experience" style={{color:"black"}}>EXPERIENCE</Link>
                }
              </li>
              <li className="nav-item" style={{margin:"0 .5em"}}>
                {
                  window.location.href.indexOf("hobbies") > -1 ?
                  <Link className="nav-link" to="/hobbies" style={{color:"black", outline:"1px solid black"}}>HOBBIES</Link>
                  :
                  <Link className="nav-link" to="/hobbies" style={{color:"black"}}>HOBBIES</Link>
                }
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;