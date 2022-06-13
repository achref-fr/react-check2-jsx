import React from 'react';
import './style.css';
import imageInSrc from "./img/imageInSrc.jpg"
function App() {
  
  return (
    <div className="App">
    
    <div className="container">
        <div style={{border:"solid 1px black",maxWidth:"100vw", display:"flex", flexDirection:"column", alignContent:"center"}} >
            <h1 className="title red">achref</h1>
            <br />
            <div style={ {display:"flex", justifyContent:"space-around"} }>
   <img src="imagelnPublic.png" alt="hello"/>

   <img src={imageInSrc} alt="img"  width="400"/>
   
     </div>
     </div>
        <video width="320" height="240"   controls >
        <source src="myVideo.mp4" type="video/mp4" />
        </video>
        </div>
        </div>
  );
  
}



export default App;


