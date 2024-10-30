import Motion from "./motion";
import Particles from "./Particles"; // Import your Particles component
import { ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
  return (
    <div className="position-relative">
      {/* Particles Component Layered Behind the Content */}
      <Motion>
      <Particles
        className="position-absolute top-0 start-0 w-100 h-100"
        quantity={50} 
        staticity={50} 
        ease={50} 
        refresh={false} 
      />
      
      <div className="p-5 text-center bg-image " style={{    
        backgroundColor: 'black',
      }}>
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            {children}
        </div>
      </div>
          </Motion>
    </div>
  );
}