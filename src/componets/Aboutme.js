import React from "react";
import { Alert } from "react-bootstrap";

const Aboutme =()=>{
   

  return (
    <>
      <Alert show={true} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          I am a Nurse that is switching fields into the Computer Science world. Check out my profile for things about me!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <p>Placeholder for Linkedin </p><p></p>
        </div>
      </Alert>

  
    </>
  )
}

export default Aboutme