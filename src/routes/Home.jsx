import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Home() {
  const [typeWriter] = useTypewriter({
    words: [
      "Front-End Developer",
      "UX Enthusiast",
      "In my journey to becoming MERN developer"
    ],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 80,
  });

  return (
    <motion.div 
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="container">
        <h1>Jonathan Rodríguez</h1>
        <h2>
          {typeWriter}
          <Cursor />
        </h2>
        <Link to="/projects" className="buttonA">
          Check out my projects
        </Link>
        <hr />
        <h3>Me, Myself and I</h3>
        <p className="bio">
          <b>Self taught developer</b>, with a passion for coding, I have been
          pursuing web development on my own time, studying various front-end
          technologies such as HTML, CSS, JavaScript and React. Having excellent
          understanding of these technologies and have developed several projects to showcase my skills.
        </p>
        <p className="highlight">
          I am currently seeking employment opportunities.
        </p>
        <p>
          Get in touch?, go to <Link to="/Contact">Contact section</Link>!
        </p>
        <p>
          More details? Check out my profile on{" "}
          <a href="https://www.linkedin.com/in/jonathanrodriguez04" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          !
        </p>
      </div>
    </motion.div>
  );
}
