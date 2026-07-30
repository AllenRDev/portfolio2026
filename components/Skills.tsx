import { skills } from "@/data/skills";


export default function Skills() {
  return (
    <section
      id="skills"
      className="
        scroll-mt-24
        py-24
        px-6
      "
    >

      <div className="
        max-w-6xl
        mx-auto
      ">

        <p className="
          text-blue-500
          font-semibold
          mb-3
        ">
          Skills
        </p>


        <h2 className="
          text-4xl
          font-bold
          mb-10
        ">
          Technologies I work with
        </h2>


        <div className="
          grid
          md:grid-cols-2
          gap-6
        ">

          {skills.map((group) => (

            <div
              key={group.category}
              className="
                rounded-xl
                border
                border-gray-800
                bg-gray-900
                p-6

                transition
                duration-300

                hover:-translate-y-2
                hover:border-blue-500
              "
            >

              <h3 className="
                text-xl
                font-semibold
                mb-5
              ">
                {group.category}
              </h3>


              <div className="
                flex
                flex-wrap
                gap-3
              ">

                {group.items.map(skill => (

                  <span
                    key={skill}
                    className="
                      rounded-full
                      bg-gray-800
                      px-4
                      py-2
                      text-sm

                      transition
                      duration-300

                      hover:bg-blue-600
                      hover:text-white
                      hover:scale-110

                      cursor-default
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}