import Motion from "./motion";
import { Container } from "react-bootstrap";
import Particles from "./Particles"; // Import your Particles component

export default function Hero() {
  return (
    <div className="position-relative">
      {/* Particles Component Layered Behind the Content */}
      <Particles
        className="position-absolute top-0 start-0 w-100 h-100"
        quantity={50} 
        staticity={50} 
        ease={50} 
        refresh={false} 
      />
      
      <div className="p-5 text-center bg-image rounded-3" style={{    
        backgroundColor: 'black',
      }}>
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <Container className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
          <Motion>
                <h1 className="mb-3">Sumit</h1>
                <h4 className="mb-3">
                  Final-year Data Science student with 3 years of experience in data processing, engineering, and analytics. 
                  Expertise in developing data-driven applications focused on AI and machine learning. 
                  Improved system performance by 15% through innovative solutions in IoT and energy usage forecasting. 
                  Seeking roles as a Machine Learning Engineer or Data Scientist to leverage skills in building impactful AI solutions.
                </h4>
          </Motion>
              </div>
            </Container>
        </div>
      </div>
    </div>
  );
}
