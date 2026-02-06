import Link from "next/link";

export default function Footer(){
  return <footer className="flex justify-center items-center py-10 border-t-2 border-white/5">
    <span className="
      text-gray-400
      text-sm
      sm:text-base
    ">
      This is Callie&apos;s carrot 🥕 · <a href="https://danielantcam.dev/" className="font-semibold underline hover:text-blue-600">danielantcam.dev</a>
    </span>
  </footer>;
}