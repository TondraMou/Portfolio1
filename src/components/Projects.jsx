import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Projects.module.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  
  useEffect(() => {
    fetch("/works.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching works:", err));
  }, []);

  return (
    <section className={styles.projectsSection}>
      {projects.map((project, index) => (
        <Card
          key={project.id}
          i={index}
          title={project.title}
          
          src={project.image}
          liveLink={project.liveLink}
          githubLink={project.githubLink}
        />
      ))}
    </section>
  );
};

const Card = ({ i, title, src, liveLink, githubLink }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "start start"],
    });
  
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
    return (
      <div ref={containerRef} className={styles.cardContainer}>
        <motion.div
          style={{
            scale: cardScale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className={styles.card}
        >
          <h2>{title}</h2>
          <div className={styles.body}>
            
            <div className={styles.imageContainer}>
              <motion.div
                className={styles.inner}
                style={{ scale: imageScale }}
              >
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full"
                />
              </motion.div>
            </div>
  
            
            <div className={styles.buttons}>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Live Link
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };  

export default Projects;


