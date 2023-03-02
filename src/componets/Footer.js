import React from "react";
import { Alert } from "react-bootstrap";

const Footer =()=>{
    return(
        <Alert className="footer" variant="primary">
        <Alert.Heading>&copy; Tyler Powers, 2023</Alert.Heading>
        <section className="d-flex justify-content-between">
         <a href="" target="_blank">Linked In</a>
         <a href="https://github.com/tpowers29" target="_blank">Github</a>
        </section>
      </Alert>
    
    )
}

export default Footer