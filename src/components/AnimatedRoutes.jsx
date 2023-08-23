import React from 'react'
import { 
    Routes, 
    Route, 
    Navigate, 
    useLocation 
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from "../routes/Home";
import Projects from "../routes/Projects";
import Contact from '../routes/Contact';
import Archive from '../routes/Archive';
import Error from "../routes/Error";

export default function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </AnimatePresence>
  )
}
