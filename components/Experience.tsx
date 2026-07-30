import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        scroll-mt-24
        py-24
        px-6
      "
    >

      <div className="max-w-5xl mx-auto">

        <p className="
          text-blue-500
          font-semibold
          mb-3
        ">
          Experience
        </p>


        <h2 className="
          text-4xl
          font-bold
          mb-12
        ">
          Professional Journey
        </h2>


        <div className="
          relative
          border-l
          border-gray-700
          ml-4
        ">

          {experience.map((job) => (

            <div
              key={job.company}
              className="
                relative
                pl-10
                pb-12
              "
            >

              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  -left-[9px]
                  top-2
                  h-4
                  w-4
                  rounded-full
                  bg-blue-500
                  ring-4
                  ring-gray-950
                "
              />


              <div
                className="
                  rounded-xl
                  border
                  border-gray-800
                  bg-gray-900
                  p-6

                  transition
                  duration-300

                  hover:border-blue-500
                  hover:-translate-y-1
                "
              >

                <p className="
                  text-sm
                  text-blue-400
                ">
                  {job.dates}
                </p>


                <h3 className="
                  text-2xl
                  font-bold
                  mt-2
                ">
                  {job.role}
                </h3>


                <h4 className="
                  text-gray-400
                  mb-4
                ">
                  {job.company}
                </h4>


                <p className="
                  text-gray-400
                  mb-5
                ">
                  {job.description}
                </p>


                <ul className="
                  space-y-2
                  text-gray-300
                ">

                  {job.highlights.map(item => (
                    <li key={item}>
                      • {item}
                    </li>
                  ))}

                </ul>


                <div className="
                  flex
                  flex-wrap
                  gap-2
                  mt-5
                ">

                  {job.technologies.map(tech => (

                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-gray-800
                        px-3
                        py-1
                        text-sm

                        transition
                        hover:bg-blue-600
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>


              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}