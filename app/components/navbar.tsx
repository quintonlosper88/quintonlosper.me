export const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-4 bg-zinc-900">
      <nav className="fixed top-0 left-0 w-full h-16 bg-[#080808]/80 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="text-amber-500 font-mono font-bold tracking-tighter">
            <span className="text-4xl font-extrabold text-amber-500 mb-8">
              <h3>QL</h3>
            </span>
          </div>

          {/* Navigation Links - Spaced Equally */}
          <div className="flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-amber-500 transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-amber-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-amber-500 transition-colors"
            >
              Contact
            </a>{" "}
            <a
              href="#academic"
              className="hover:text-amber-500 transition-colors"
            >
              Education
            </a>
            <a
              href="#experience"
              className="hover:text-amber-500 transition-colors"
            >
              Experience
            </a>
            {/* Call to Action */}
            <button className="bg-amber-500 text-black px-4 py-2 rounded-md hover:bg-amber-400 transition-all">
              Resume
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
