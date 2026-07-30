import { FaCode } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        scroll-mt-24
        py-24
        px-6
      "
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-blue-500 font-semibold mb-3">
          Projects
        </p>

        <h2 className="text-4xl font-bold mb-8">
          Featured Projects
        </h2>

        <div
          className="
            rounded-2xl
            border
            border-gray-800
            bg-gray-900
            p-10
            text-center

            transition
            duration-300

            hover:border-blue-500
          "
        >

          <div
            className="
              inline-flex
              items-center
              justify-center
              w-16
              h-16
              rounded-full
              bg-blue-500/10
              text-blue-400
              mb-6
            "
          >
            <FaCode size={28} />
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Projects Coming Soon
          </h3>

          <p
            className="
              text-gray-400
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            I'm currently rebuilding previous projects and developing
            new applications to better showcase my experience!
          </p>

          <p
            className="
              mt-6
              text-blue-400
              font-medium
            "
          >
            Check back soon!
          </p>

        </div>

      </div>
    </section>
  );
}