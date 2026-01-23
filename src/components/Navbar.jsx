const LINKS = [
  { name: "About me", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "mailto:hello@danielantcam.dev" },
]

export default function Navbar(){
  return <nav className="
    flex justify-center items-end
    h-16
    md:h-20
  ">
    <ul className="
      flex
      gap-4
      md:gap-6
    ">
      { LINKS.map(link=> <NavbarLink key={link.name} {...link} />) }
    </ul>
  </nav>;
}

function NavbarLink({ name, href }){
  return <li
    key={name}
    className="
      bg-gray-900 text-gray-300 font-semibold border-2 border-gray-100/10 rounded-2xl shadow-gray-400/10 shadow-lg hover:text-gray-100 hover:border-blue-600 hover:shadow-blue-600/20 hover:shadow-xl transition-all
      text-sm
      sm:text-md
    ">
    <a
      href={href}
      className="
        block py-1
        px-3
        sm:px-5
    ">
      {name}
    </a>
  </li>;
}