
import { FaFacebookF, FaGithub, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        
        <div className="flex justify-center gap-6 mb-4">
          
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 text-2xl transition duration-300"
          >
            <FaFacebookF />
          </a>

          
          <a
            href="https://github.com/TondraMou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400 text-2xl transition duration-300"
          >
            <FaGithub />
          </a>

         
          <a
            href="https://www.pinterest.com/mou0070"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 text-2xl transition duration-300"
          >
            <FaPinterestP />
          </a>
        </div>
        <p className="text-sm text-gray-500">&copy; 2025 Tondra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;