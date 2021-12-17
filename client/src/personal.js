import React from "react";
import FilesUploadComponent from "./formupload";
import LegendUploadComponent from "./legendupload";
import ExerciseList from "./f";
import Register from "./register";
import ls from 'local-storage';
//import Register from "./register";
/*import Gallery from "./Gallery";
import Gallery2 from "./Gallery2";
import Foot from "./footerr.js";*/

function Personal() {
  return (
    <div>
      <FilesUploadComponent />
      <ExerciseList />
      <LegendUploadComponent />
      <Register />
      <button onClick={()=>{
          ls.remove("user")
          window.location="/"
      }}>Signout</button>
      
    </div>
  );
}

export default Personal;