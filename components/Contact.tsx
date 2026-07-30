import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        scroll-mt-24
        py-24
        px-6
      "
    >

      <div
        className="
          max-w-4xl
          mx-auto
          text-center
        "
      >

        <p
          className="
            text-blue-500
            font-semibold
            mb-3
          "
        >
          Contact
        </p>


        <h2
          className="
            text-4xl
            font-bold
            mb-6
          "
        >
          Let's build something together
        </h2>


        <p
          className="
            text-gray-400
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          I'm currently looking for PHP Developer
          opportunities where I can contribute my
          experience with Symfony, backend development,
          and building reliable web applications.
        </p>


        <div
          className="
            flex
            justify-center
            flex-wrap
            gap-4
            mt-8
          "
        >

          <a
            href="mailto:allenrobertsdev@gmail.com"
            className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-lg
              bg-blue-600
              transition
              hover:bg-blue-500
            "
          >
            <FaEnvelope size={18}/>
            Email Me
          </a>


          <a
            href="https://www.linkedin.com/in/allen-roberts-298670199/"
            target="_blank"
            className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-lg
              border
              border-gray-700
              transition
              hover:border-blue-500
            "
          >
            <FaLinkedin size={18}/>
            LinkedIn
          </a>


          <a
            href="https://github.com/AllenRDev"
            target="_blank"
            className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-lg
              border
              border-gray-700
              transition
              hover:border-blue-500
            "
          >
            <FaGithub size={18}/>
            GitHub
          </a>

        </div>

      </div>

    </section>
  );
}