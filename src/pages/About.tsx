import { Container } from "react-bootstrap";

import "../styles/home.css"; // Import the CSS file

export function About() {
  return (
    <Container className="about-container">
      <h1>About Us</h1>
      <p>
        This website is a project created with the goal of bringing joy and happiness to people's lives through the love of plushies. We believe that plushies have the power to make people feel comforted, loved, and happy, and we want to share that with the world.
      </p>
      <p>
        Thank you for choosing us as your go-to destination for plushies. We hope that our website can bring a little bit of joy to your life and put a smile on your face.
      </p>
    </Container>
  );
}
