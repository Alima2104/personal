import React from "react";
import Header from "../../components/header";
import "./project6.css";
import Vimeo from '@u-wave/react-vimeo';

function Project4Description() {
  return ( 
  <div className="home">
  <div>
      <Header />
  </div>
  <div className = "bodyPart">
    <div className="title"> 
    <p>"You Are the Problem"</p>
    </div>
    <div className="subtitle"> 
    <p>VR simulation that explores fast fashion through interaction</p>
    </div> 
    <div className="video">
    <Vimeo
      video="https://vimeo.com/781964496"
      width={500}
      height={300}
      /> 
      </div>
     
      <div className = "mainText">
        <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
      </div>
  </div>
</div>
  );
}

export default Project4Description;