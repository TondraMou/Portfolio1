import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import girl from '../assets/girl.jpg';

const Home = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold md:mt-3 lg:mt-0 text-gray-900 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Hi, I’m Tondra, a passionate developer eager to craft engaging and innovative digital experiences. Explore my skills, projects, and let’s connect!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
            >
              Contact
            </Link>
            <a
              href="/path-to-your-cv.pdf"
              download
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        
        <motion.div
          className="flex justify-center md:justify-end max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={girl}
            alt="Your Profile"
            className="w-full rounded-lg lg:rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
