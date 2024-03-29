import React from "react";
import Header from "../../components/header";
import p1 from "./img/cover.jpg";
import p2 from "./img/toteBag.png";
import p3 from "./img/p3.png";
import { Link } from "react-router-dom";
import "./work.css";

function Works() {
    return ( 
    <div className="home">
      <div>
          <Header />
      </div>
      <div className = "body">
      <div className="WorkTab"> 
        <div className="title"> Projects </div>
        <div className="description"> Click on them to learn more details! </div>
        </div> 
        <div className="containerForWorks"> 
        <div className="grid-container">
            <div className="grid-item"> 
               <Link to="/project1">
               <figure  >
                  <img src={p1} />
                  <figcaption>
                    <h> Musaik </h> <br/>
                    The app that connects through music
                    </figcaption>
                </figure>
                 </Link>  
            </div>
            <div className="grid-item"> 
            
               <Link to="/project2">
               <figure>
               <img src={p2} />
                  <figcaption><h> Super Emergency Kit </h> <br/>
                    The solution to help students feel safer
                    </figcaption>
                </figure>
                </Link>  
            </div>
            <div className="grid-item"> 
               <Link to="/project3">
               <figure>
               <img src={p3} />
                  <figcaption><h> CodeChat </h> <br/>
                    A social business idea that will make quality CS education more accessible </figcaption>
                </figure> </Link>  
            </div>
            
        </div>
        </div>
     

         
      </div>
    </div>
    );
  }
  
  export default Works;