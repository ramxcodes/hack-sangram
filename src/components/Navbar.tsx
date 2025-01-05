import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-black/50 text-white sticky top-0 z-50 backdrop-blur-lg">
      <nav className="flex px-10 items-center justify-between h-full">
        <div className="flex items-center gap-2">
          <Image src="/logo.webp" alt="" width={30} height={30} />
          <p>MU-ACM</p>
        </div>
        <div className="text-lg hidden md:block">
          <div className="flex gap-4">
            <a
              href="#about"
              className="hover:text-[#45BBD5] transition-all duration-150 ease-in-out"
            >
              About Event
            </a>
            <a
              href="#register"
              className="hover:text-[#45BBD5] transition-all duration-150 ease-in-out"
            >
              Register
            </a>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="https://forms.gle/8qgWchFobv6jLAGR6"
            target="_blank"
            className="bg-[#45BBD5] px-4 py-1 rounded-md text-black hover:bg-[#45BBD5] transition-all duration-150 ease-in-out"
          >
            Fill the form!
          </a>
        </div>
      </nav>
    </div>
  );
}
