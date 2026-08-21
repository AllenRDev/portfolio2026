import { FaCode, FaExternalLinkAlt, FaGithub, FaUtensils } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Recipe Hub",
      badge: "In Progress",
      description:
        "A full-stack community platform where food enthusiasts can discover, create, and share recipes. Features user authentication, interactive recipe posting, commenting system, and rating functionality.",
      techStack: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Tailwind CSS"],
      icon: <FaUtensils className="text-blue-400 text-xl" />,
      githubUrl: "https://github.com/AllenRDev/recipe-hub", // Replace with your repository link if available
      liveUrl: "https://recipe-hub.on-forge.com",   // Replace with your live demo link if available
    },
  ];

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

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                justify-between
                rounded-2xl
                border
                border-gray-800
                bg-gray-900
                p-8
                text-left
                transition
                duration-300
                hover:border-blue-500/60
                hover:shadow-lg
                hover:shadow-blue-500/5
              "
            >
              <div>
                {/* Card Header: Icon & Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    {project.icon}
                  </div>
                  {project.badge && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-gray-800 text-gray-300 border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800/80 text-sm font-medium">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={16} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors ml-auto"
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder Card for Future Work */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-dashed
              border-gray-800
              bg-gray-900/40
              p-8
              text-center
              min-h-[300px]
            "
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-500 mb-4">
              <FaCode size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">
              More Coming Soon
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Currently building other full-stack web applications to add here!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}