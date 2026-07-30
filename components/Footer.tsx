import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  FaArrowUp
} from "react-icons/fa6";


export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-gray-800
        py-8
        px-6
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
          text-sm
          text-gray-500
        "
      >

        {/* Copyright */}
        <div>
          <p>
            © {new Date().getFullYear()} Allen Roberts
          </p>
        </div>


        {/* Built With */}
        <div>
          <p>
            Built with Next.js + TypeScript + Tailwind CSS
          </p>
        </div>


        {/* Links */}
        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <a
            href="https://github.com/AllenRDev"
            target="_blank"
            className="
              transition
              hover:text-blue-500
            "
            aria-label="GitHub"
          >
            <FaGithub size={20}/>
          </a>


          <a
            href="https://www.linkedin.com/in/allen-roberts-298670199/"
            target="_blank"
            className="
              transition
              hover:text-blue-500
            "
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20}/>
          </a>


          <a
            href="#home"
            className="
              transition
              hover:text-blue-500
            "
            aria-label="Back to top"
          >
            <FaArrowUp size={18}/>
          </a>

        </div>

      </div>

    </footer>
  );
}