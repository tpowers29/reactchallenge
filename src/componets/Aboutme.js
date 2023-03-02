import React from "react";
import { Alert } from "react-bootstrap";

const Aboutme =()=>{
   

  return (
    <>
      <Alert show={true} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <p>Placeholder </p><p></p>
        </div>
      </Alert>

  
    </>
  )
}

export default Aboutme