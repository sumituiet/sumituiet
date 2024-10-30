import { motion } from "framer-motion";

import { ReactNode } from "react";

export default function Motion({ children }: { children: ReactNode }) {
    return (
        <motion.div
        whileHover={{ scale: 1.1,
         }}
        style={{
            
        }}
        >{children}</motion.div>
    );
    }