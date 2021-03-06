import React from 'react';

import MyNavbar from './components/MyNavbar';
import './skills.css';

class Skills extends React.Component{

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render(){
    return(
      <div style={{fontFamily:"Karla"}}>
        <MyNavbar />
        {
          this.state.width < 750?
          <div style={{paddingLeft:"2.7em", paddingRight:"3.5em", marginTop:"100px"}}>
            
            <div style={{overflow:"auto", paddingBottom:"1.5em"}}>
              <h4 style={{fontSize:"6vw"}}>Data Science</h4>
              <ul className="mobileUL" style={{float:"left"}}>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>Scikit-learn</li>
                <li>TensorFlow</li>
                <li>Keras</li>
                <li>Matplotlib</li>
                <li>PySpark</li>
              </ul>
              <ul className="mobileUL" style={{float:"right"}}>
                <li>Seaborn</li>
                <li>OpenCV</li>
                <li>Plotly</li>
                <li>Jupyter</li>
                <li>SQL</li>
                <li>AWS</li>
                <li>GCP</li>
              </ul>
            </div>

            <div style={{overflow:"auto", paddingBottom:"1.5em"}}>
              <h4 style={{fontSize:"6vw"}}>Full Stack Web Development</h4>
              <ul className="mobileUL" style={{float:"left"}}>
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>RESTful APIs</li>
                <li>CI/CD</li>
                <li>AWS</li>
                <li>Heroku</li>
              </ul>
              <ul className="mobileUL" style={{float:"right"}}>
                <li>Bootstrap</li>
                <li>Semantic UI</li>
                <li>Leaflet</li>
                <li>Flask</li>
                <li>jQuery</li>
              </ul>
            </div>

          </div>
          :
          <div style={{width:'80vw', margin:'0 auto'}}>

            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div>
                <h1 style={{float:"left", margin:'0 0 0 30px'}}>Data Science</h1>
                <br/>
                <br/>
                <hr style={{borderTop:'1px solid #d4d4d4', width:'75vw'}}/>
                <div style={{fontSize:'20px', margin:'30px'}}>
                  NumPy &nbsp;&nbsp;&nbsp;
                  Pandas &nbsp;&nbsp;&nbsp;
                  Scikit-learn &nbsp;&nbsp;&nbsp;
                  TensorFlow &nbsp;&nbsp;&nbsp;
                  Keras &nbsp;&nbsp;&nbsp;
                  PySpark &nbsp;&nbsp;&nbsp;
                  Matplotlib &nbsp;&nbsp;&nbsp;
                  Seaborn &nbsp;&nbsp;&nbsp;
                  Plotly &nbsp;&nbsp;&nbsp;
                  OpenCV &nbsp;&nbsp;&nbsp;
                  Jupyter &nbsp;&nbsp;&nbsp;
                  SQL &nbsp;&nbsp;&nbsp;
                  AWS &nbsp;&nbsp;&nbsp;
                  GCP &nbsp;&nbsp;&nbsp;
                </div>

              </div>
            </div>
            <br/>

            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div>
                <h1 style={{float:"left", margin:'0 0 0 30px'}}>Full Stack Web Development</h1>
                <br/>
                <br/>
                <hr style={{borderTop:'1px solid #d4d4d4', width:'75vw'}}/>
                <div style={{fontSize:'20px', margin:'30px'}}>
                  HTML/CSS &nbsp;&nbsp;&nbsp;
                  Javascript &nbsp;&nbsp;&nbsp;
                  Python &nbsp;&nbsp;&nbsp;
                  PHP &nbsp;&nbsp;&nbsp;
                  | &nbsp;&nbsp;&nbsp;
                  RESTful APIs &nbsp;&nbsp;&nbsp;
                  CI/CD &nbsp;&nbsp;&nbsp;
                  Heroku &nbsp;&nbsp;&nbsp;
                  AWS &nbsp;&nbsp;&nbsp;
                  | &nbsp;&nbsp;&nbsp;
                  Flask &nbsp;&nbsp;&nbsp;
                  React.js &nbsp;&nbsp;&nbsp;
                  Bootstrap &nbsp;&nbsp;&nbsp;
                  Semantic UI &nbsp;&nbsp;&nbsp;
                  Leaflet &nbsp;&nbsp;&nbsp;
                  jQuery &nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Skills
