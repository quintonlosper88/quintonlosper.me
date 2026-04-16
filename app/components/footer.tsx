export const Footer = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div>
        <span className="text-4xl font-extrabold text-amber-500 mb-8">
          <h3>QL</h3>
        </span>
        <p className="uppercase text-xl mt-5 text-zinc-700">
          Global Product Manager // Software Engineer // Builder. Expertise in
          the digitalization of mineral processing assets.
        </p>
      </div>
      <div>
        <h3 className="font-bold mb-5">DIRECT</h3>
        <div className="flex flex-col gap-2">
          <a
            href="https://www.linkedin.com/in/quinton-losper/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-zinc-700 hover:text-amber-500 transition-colors"
          >
            linkedin
          </a>
          <a
            href="https://github.com/quinton-losper"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-zinc-700 hover:text-amber-500 transition-colors"
          >
            Github
          </a>
          <a
            href="mailto:quinton.losper@metso.com"
            className="uppercase text-zinc-700 hover:text-amber-500 transition-colors"
          >
            email
          </a>
        </div>
      </div>
      <div className="font-mono text-sm bg-black/40 p-4 rounded-lg border border-zinc-800 shadow-2xl">
        <div className="flex gap-1.5 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>

        <h3 className="text-amber-500 mb-2 flex items-center gap-2">
          <span className="text-zinc-500">❯</span> localhost:3000
        </h3>

        <p className="text-zinc-400 mb-1">
          LOC: <span className="text-zinc-200">ESPOO, FI</span>
        </p>

        <div className="flex flex-wrap gap-x-2">
          <span className="text-green-400">quilos@linux-desktop:~$</span>
          <span className="text-zinc-100">
            npm run build
            <span className="inline-block w-2 h-4 ml-1 bg-green-400 animate-pulse align-middle" />
          </span>
        </div>
      </div>
    </div>
  );
};
