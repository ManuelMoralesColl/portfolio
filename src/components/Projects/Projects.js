import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//import motorImg from "../../Assets/motorhub.png"; // Asegúrate de tener una imagen de este proyecto
//import bizImg from "../../Assets/bizmanage.png"; // Asegúrate de tener una imagen de este proyecto
import GestionEmpleados from "../../Assets/GestionEmpleados.png"; // Asegúrate de tener una imagen de este proyecto
import carbikImg from "../../Assets/carbikImg.png"; 
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Personal <strong className="blue">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some personal projects I have been working on:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <Card className="project-card-view">
             <Card.Img variant="top" src={carbikImg} alt="Carbik" />
             <Card.Body>
                <Card.Title><b>Carbik</b></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                A social network dedicated to motor enthusiasts. Users have their own virtual garage 
                and can share photos, experiences, and events, as well as follow other automotive fans. 
                Developed with Spring Boot, IONIC Angular, and MySQL.  
                <h4><strong className="blue">Repository: </strong></h4>  
                  <p><b><a style={{ color: 'white', textDecoration: 'none' }} href="https://github.com/ManuelMoralesColl/carbikEntrego.git">Backend</a></b></p>
                  <p><b><a style={{ color: 'white', textDecoration: 'none' }} href="https://github.com/ManuelMoralesColl/CarbikFrontend.git">Frontend</a></b></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={GestionEmpleados} alt="Gestion Empresa" />
              <Card.Body>
                <Card.Title><b>Business Management System</b></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                A management system for small and medium-sized enterprises. It includes department 
                control and employee management. Developed with Spring Boot, Angular, and MySQL, 
                incorporating technologies such as GraphQL. 
                  <h4><strong className="blue">Repository: </strong></h4>  
                  <p><b><a style={{ color: 'white', textDecoration: 'none' }} href="https://github.com/ManuelMoralesColl/gestionEmpresaManuel.git">Backend & Frontend</a></b></p>              
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
