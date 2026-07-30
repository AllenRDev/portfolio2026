const Hero = () => {
  return (
<section id="home" className="min-h-screen flex items-center" >
  <div className="max-w-5xl mx-auto px-6">
    <p className="text-blue-500 font-semibold">
      PHP Developer
    </p>

    <h1 className="text-6xl font-bold mt-2">
      Hi, I'm <span className="text-blue-500">Cory Roberts</span>.
    </h1>

    <p className="text-xl text-gray-400 mt-6 max-w-2xl">
      I build scalable web applications with PHP, Symfony,
      JavaScript, and modern web technologies.
      Passionate about backend development,
      clean architecture, and solving challenging problems.
    </p>

    <div className="flex gap-4 mt-8">
      <button className="px-6 py-3 rounded-lg bg-blue-600 
                      transition
                      duration-300
                      hover:bg-blue-700
                      hover:text-white
                      hover:scale-110
                      cursor-pointer
    ">
        Download Resume
      </button>

      <button className="px-6 py-3 rounded-lg border 
                      transition
                      duration-300
                      hover:bg-blue-700
                      hover:text-white
                      hover:scale-110
                      cursor-pointer
    ">
        Contact Me
      </button>
    </div>
  </div>
</section>
  );
};

export default Hero;