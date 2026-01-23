"use client"

import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { RiMailLine, RiMailSendLine, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";

export default function Hero(){
  const [ mailSent, setMailSent ] = useState(false);
  const timeoutRef = useRef(null);

  function handleMailSent() {
    setMailSent(true);
    timeoutRef.current = setTimeout(() => setMailSent(false), 1_500);
  }

  // Cleans up the timeout if the component is unmounted
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return <header
    id="hero"
    className="relative w-full text-white py-20"
  >
    <div aria-hidden="true" className="-z-10 absolute -top-10 -left-10 w-100 h-100 rounded-full bg-blue-500/10 blur-3xl border-2">
      <div className="absolute inset-0 m-auto w-20 h-20 rounded-full blur-3xl bg-blue-500/30"></div>
    </div>

    <div className="max-w-140">
      <div 
        className="
          flex items-center gap-2 w-fit bg-green-600/30 text-green-100 font-semibold border-green-100/20 px-3 py-1 mb-3 border-2 rounded-xl
          text-xs
          sm:text-sm
      ">
        <MdWorkOutline />
        Open to work
      </div>

      <h1 className="
        font-semibold mb-2
        text-3xl
        sm:text-5xl
      ">
        Hey! I&apos;m Daniel Antón.
      </h1>

      <p className="
        mb-4 text-gray-300
        text-xl
        sm:text-2xl
      ">
        A self-taught <span className="text-blue-600 font-semibold">Full-Stack Web Developer</span> based on Madrid, Spain.
      </p>

      <div className="
        flex items-center
        gap-3
        sm:gap-4
      ">
        <a
          href="mailto:hello@danielantcam.dev"
          onClick={handleMailSent}
          className={clsx(
            "w-fit flex items-center gap-2 border-2 border-white/10 text-gray-200 font font-semibold px-2 py-1 rounded-xl shadow-gray-400/10 shadow-lg cursor-pointer hover:border-gray-500 hover:shadow-xl transition-all",
            `
              text-sm
              md:text-base
            `,
            mailSent ? "bg-white/20 border-white/20" : "bg-white/10"
        )}>
          {!mailSent && <RiMailLine className="size-4" />}

          {mailSent && <RiMailSendLine className="size-4" />}

          Let&apos;s work together!
        </a>

        <a href="https://www.linkedin.com/in/danielantcam/" target="_blank">
          <RiLinkedinBoxFill className="size-8 hover:text-gray-400 transition-colors" />
        </a>

        <a href="https://github.com/danielantcam" target="_blank">
          <RiGithubFill className="size-8 hover:text-gray-400 transition-colors" />
        </a>
      </div>
    </div>
  </header>;
}