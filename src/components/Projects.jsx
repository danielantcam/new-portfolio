import clsx from "clsx";
import Image from "next/image";
import { SiReact, SiTailwindcss, SiNodedotjs, SiNextdotjs } from "react-icons/si";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";

const TECHNOLOGIES = {
  react: { name: "React", classes: "bg-[#0c9fcc]/40 border-2 border-white/10", Icon: SiReact },
  tailwind: { name: "Tailwind", classes: "bg-[#3ec0f7]/40 border-2 border-white/10", Icon: SiTailwindcss },
  node: { name: "Node.js", classes: "bg-[#4cb051]/40 border-2 border-white/10", Icon: SiNodedotjs },
  next: { name: "Next.js", classes: "bg-[#000000]/40 border-2 border-white/10", Icon: SiNextdotjs }
};

const PROJECTS = [
  {
    title: "Simple link shortener",
    description: "A simple full-stack project with a React frontend powered by Vite and Tailwind CSS, and a basic Node.js backend that generates the shortened links and handles redirections.",
    image: "/projects/simple-link-shortener.webp",
    stack: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.tailwind,
      TECHNOLOGIES.node
    ],
    link: "https://linkshortener.danielantcam.dev/",
    github: "https://github.com/danielantcam/simple-url-shortener"
  },
  {
    title: "LinkHUB - LinkTree copy",
    description: "LinkHUB is a simple LinkTree-like app developed on Next.js for both the front and backend and styled with Tailwind. It is possible to log in using either Google or Github (uses Auth.js).",
    image: "/projects/linkhub.webp",
    stack: [
      TECHNOLOGIES.next,
      TECHNOLOGIES.tailwind
    ],
    link: "https://linkhub.danielantcam.dev/",
    github: "https://github.com/danielantcam/linkhub"
  }
];  

export default function Projects(){
  return <section id="projects" className="py-20">
    <h2 className="text-white/50 text-lg font-semibold uppercase tracking-widest mb-6">
      My Projects
    </h2>
    <div className="
      grid grid-cols-1
      gap-10
      lg:gap-20
      2xl:grid-cols-2
    ">
      {PROJECTS.map(p => <Project key={p.title} {...p} />)}
    </div>
  </section>;
}

function Project({ title, description, image, stack, link, github }){
  return <article className="
    flex group
    flex-col gap-2
    lg:flex-row lg:gap-16
    2xl:flex-col 2xl:gap-2
  ">
    <div className="
      relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-500/10 h-fit
      lg:w-1/2
      2xl:w-full
    ">
      <Image src={image} alt={`An image displaying the proyect: "${title}"`} width={800} height={450} className="w-full object-cover group-hover:scale-105 transition-transform" />
    </div>
    <div className="
      py-4
      lg:w-1/2
      2xl:w-full
    ">
      <div className="flex gap-2 mb-2">
        {stack.map(tech=> <Technology key={tech.name} {...tech} />)}
      </div>

      <h3 className="
        font-semibold text-white mb-1 text-2xl
      ">
        {title}
      </h3>     

      <p className="
        text-white/70 text-pretty
        text-lg mb-2
        sm:text-xl sm:mb-4
      ">
        {description}
      </p>

      <div className="flex gap-4">
        <a href={link} target="_blank" className="flex items-center gap-1 text-white bg font-semibold px-2 py-1 rounded-xl bg-white/10 border-2 border-white/10 shadow-gray-400/10 shadow-lg hover:border-gray-500 hover:shadow-xl transition-all">
          Visit site
          <RiExternalLinkLine />
        </a>
        <a href={github} target="_blank" className="flex items-center gap-1 text-white bg font-semibold px-2 py-1 rounded-xl bg-white/10 border-2 border-white/10 shadow-gray-400/10 shadow-lg hover:border-gray-500 hover:shadow-xl transition-all">
          Code
          <RiGithubLine />
        </a>
      </div>
    </div>
  </article>;
}

function Technology({ name, classes, Icon }){
  return <span className={clsx(
    " flex items-center gap-2 w-fit text-white font-semibold rounded-full",
    `
      text-xs px-2
      sm:text-sm sm:px-3
    `,
    classes
  )}>
    <Icon />
    {name}
  </span>;
}