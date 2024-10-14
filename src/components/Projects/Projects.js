import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Budget from "../../Assets/Projects/Budget-tracker.jpg"
import Freetube from "../../Assets/Projects/Freetube.jpg"
import Musify from "../../Assets/Projects/Musify.jpg"
import Shoeshop from "../../Assets/Projects/Shoeshop.jpg"
import ImageGallery from "../../Assets/Projects/Image-Gallery.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImageGallery}
              isBlog={false}
              title="Image Gallery"
              description="Developed Image Gallery, a social media platform where users can create posts with captions, images, and comments. Built using ReactJS with react-dom and hooks for efficient state management. Integrated JWT authentication for secure user sessions. Designed a responsive, modern user interface using Tailwind CSS for styling. The platform supports dynamic content creation and media sharing. Ensured a seamless user experience with real-time interactions."
              ghLink="https://github.com/Adarsh9Mishra/Image-Gallery"
              demoLink="https://image-gallery-brown-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Freetube}
              isBlog={false}
              title="Freetube"
              description="Developed the backend for Freetube a platform combining features of YouTube and Twitter. Utilized Nodejs for server-side logic and MongoDB for database management. Implemented JWT authentication and middleware for request validation and security. Designed structured models for users, posts, and media content. Tested APIs with Postman to ensure reliability. The system is scalable and optimized for social media interactions."
              ghLink="https://github.com/Adarsh9Mishra/Freetube_Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ Budget}
              isBlog={false}
              title="Budget Tracker"
              description="Built a Budget Tracker website to track and calculate user expenses. Used ReactJS with hooks for state management and dynamic updates. Developed the backend with Node.js, Express, and MongoDB for secure data handling. Implemented real-time expense tracking and reporting. The platform provides users with clear insights into their financial activity."
              ghLink="https://github.com/Adarsh9Mishra/BudgetTracker"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Musify}
              isBlog={false}
              title="Musify"
              description="Developed Musify, a music streaming platform similar to Spotify. Implemented user-friendly music playback features using HTML, CSS, and JavaScript. Designed an intuitive and responsive interface for seamless user interaction. Integrated media controls for playing, pausing, and skipping tracks. The platform delivers a smooth, engaging music experience for users"
              ghLink="https://github.com/Adarsh9Mishra/Musify"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shoeshop}
              isBlog={false}
              title="Shoeshop"
              description="Developed Shoeshop, an e-commerce website exclusively for shoe shopping. Built the platform using HTML and CSS to create a responsive, user-friendly interface. Implemented product browsing, shopping cart, and checkout features using structured HTML. Designed a sleek, modern layout to enhance the shopping experience. The website ensures smooth navigation and efficient purchase processes."
              ghLink="https://github.com/Adarsh9Mishra/Shoeshop"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
