export default function Navbar() {
  return (
    <nav className="
      fixed 
      top-0 
      left-0 
      w-full 
      z-50
      backdrop-blur-md
      border-b
      border-gray-800
    ">
      <div className="
        max-w-6xl 
        mx-auto 
        px-6 
        py-4
        flex 
        justify-between 
        items-center
      ">

        <a 
          href="#home"
          className="font-bold text-xl"
        >
          Cory Roberts
        </a>


        <div className="flex gap-6">

          <a href="#about" className="
            transition
            duration-300
            hover:text-blue-500
          ">
            About
          </a>

          <a href="#skills" className="
            transition
            duration-300
            hover:text-blue-500
          ">
            Skills
          </a>

          <a href="#experience" className="
            transition
            duration-300
            hover:text-blue-500
          ">
            Experience
          </a>

          <a href="#projects" className="
            transition
            duration-300
            hover:text-blue-500
          ">
            Projects
          </a>

          <a href="#contact" className="
            transition
            duration-300
            hover:text-blue-500
          ">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}