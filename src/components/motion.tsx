import { motion } from "framer-motion";

import { ReactNode } from "react";

export default function Motion({ children }: { children: ReactNode }) {
    return (
        <motion.div
        whileHover={{ 
            textShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)"
         }}
        style={{
            
        }}
        >{children}</motion.div>
    );
    }