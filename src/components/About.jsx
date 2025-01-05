import { motion } from 'framer-motion';
import girl from '../assets/girl.jpg';

const About = () => {
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <motion.div
          className="flex justify-center md:justify-start max-w-lg w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={girl}
            alt="About Me"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        
        <motion.div
          className="text-center md:text-left max-w-xl w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h1>

         
          <motion.p
            className="text-lg text-gray-700 mb-4"
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            Hi, I’m Tondra. I am from Khulna, Bangladesh. I am a passionate Web Developer, dedicated to creating impactful digital experiences that blend creativity and functionality.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 mb-4"
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            With a keen eye for detail and a drive for innovation, I specialize in creating responsive, user-friendly websites using modern technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. Let's work together to bring your ideas to life and craft engaging digital experiences!
          </motion.p>

          <motion.p
            className="text-lg text-gray-700"
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            When I’m not coding, I enjoy crafting and drawing. Feel free to reach out and connect with me!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;