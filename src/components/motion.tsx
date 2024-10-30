import { motion } from "framer-motion";

import { ReactNode } from "react";

export default function Motion({ children }: { children: ReactNode }) {
    return (
        <motion.div
        whileHover={{ scale: 1.1,

            color: 'white',
            backgroundColor: 'black',
         }}
        style={{
            
        }}
        >{children}</motion.div>
    );
    }