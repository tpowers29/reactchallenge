import React from "react";
import projects from "./projects.json";
import {Card, ListGroup} from "react-bootstrap";

const Portfolio =()=>{
    return(<section className="page-content">

        <h2 className="page-heading"> Portfolio Projects</h2>
        <main className="d-flex flex-wrap justify-content-evenly">
            {projects.map((project,key) => {
                return(
                    <Card style={{ width: '18rem' }} key={key}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL+project.screenshot} />
      <Card.Body>
        <Card.Title>{project.app}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
        <Card.Link href={project.live}>LIVE</Card.Link>
        <Card.Link href={project.github}>Github</Card.Link>
      </Card.Body>
    </Card>
                )
            })}
        </main>
    </section>
    )
}

export default Portfolio