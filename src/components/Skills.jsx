import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
  { id: 1, name: 'HTML', icon: <FaHtml5 size={40} /> },
  { id: 2, name: 'CSS', icon: <FaCss3Alt size={40} /> },
  { id: 3, name: 'JavaScript', icon: <FaJs size={40} /> },
  { id: 4, name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
  { id: 5, name: 'React', icon: <FaReact size={40} /> },
  { id: 6, name: 'MongoDB', icon: <FaDatabase size={40} /> },
];

const Skills = () => {
  return (
    <section className="bg-gray-100 min-h-screen pt-20 flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-6 overflow-x-auto py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
                <h3 className="text-lg font-semibold text-gray-800 mt-4">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">I Develop My Skill Regularly to Keep Me Update</h1>
          <p className="text-lg text-gray-700 mb-6">
            I am proficient in web development technologies, specializing in crafting responsive and user-friendly websites.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Let's collaborate and bring your ideas to life!
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-blue-500 text-white px-6 py-3 mb-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;