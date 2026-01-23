import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPostgresql } from 'react-icons/si';

const STACK = [
  { name: "HTML", Svg: SiHtml5, color: "#f26629" },
  { name: "CSS", Svg: SiCss3, color: "#2466f2" },
  { name: "Tailwind", Svg: SiTailwindcss, color: "#38BDF8" },
  { name: "Javascript", Svg: SiJavascript, color: "#F7DF1E" },
  { name: "React", Svg: SiReact, color: "#61DAFB" },
  { name: "Next.js", Svg: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", Svg: SiNodedotjs, color: "#339933" },
  { name: "Express", Svg: SiExpress, color: "#FFFFFF" },
  { name: "PostgreSQL", Svg: SiPostgresql, color: "#336791" },
];

export default function Stack() {
  return (
    <section className="py-10 w-full">
      <h2 className="text-white/50 text-lg font-semibold uppercase tracking-widest mb-6">
        Technological stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {STACK.map((i) => <StackElement key={i.name} {...i} />)}
      </div>
    </section>
  );
}

function StackElement({ name, Svg, color }) {
  return (
    <div 
      className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-white/5 bg-white/2 transition-all duration-500 hover:bg-white/5 hover:-translate-y-1"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      
      <Svg 
        className="size-10 mb-3 transition-all duration-500 grayscale group-hover:grayscale-0" 
        style={{ color: color }} 
      />
      
      <span className="text-gray-400 text-xs font-semibold group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}