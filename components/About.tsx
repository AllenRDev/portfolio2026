export default function About() {
  return (
    <section
      id="about"
      className="
        scroll-mt-24
        py-24
        px-6
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
        "
      >

        <p className="
          text-blue-500
          font-semibold
          mb-3
        ">
          About Me
        </p>


        <h2 className="
          text-4xl
          font-bold
          max-w-3xl
          mb-8
        ">
          Building reliable applications
          through thoughtful engineering.
        </h2>


        <div className="
          max-w-3xl
          space-y-5
          text-gray-400
          leading-relaxed
        ">

          <p>
            I'm a PHP developer with over four years of
            professional experience building and maintaining
            web applications. My background includes both
            client-focused development and production software
            development in collaborative engineering teams.
          </p>


          <p>
            At Scout, I worked primarily with Symfony
            and PHP to develop new features, resolve application
            issues, participate in code reviews, and improve
            reliability through automated testing with PHPUnit.
          </p>


          <p>
            I enjoy backend development, solving complex
            problems, and continuously improving my skills
            through building projects and exploring new
            technologies.
          </p>

        </div>

      </div>
    </section>
  );
}