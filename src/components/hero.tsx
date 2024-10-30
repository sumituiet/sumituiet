import { Container } from "react-bootstrap"
import Background from "./background"

export default function Hero() {
  return(
    <Background>
<Container className="d-flex justify-content-center align-items-center h-100">
<div className="text-white">
  <h1 className="mb-3">Sumit</h1>
  <h4 className="mb-3">
    Final-year Data Science student with 3 years of experience in data processing, engineering, and analytics. 
    Expertise in developing data-driven applications focused on AI and machine learning. 
    Improved system performance by 15% through innovative solutions in IoT and energy usage forecasting. 
    Seeking roles as a Machine Learning Engineer or Data Scientist to leverage skills in building impactful AI solutions.
  </h4>
</div>
</Container>
</Background>
  )}

