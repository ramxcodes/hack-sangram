"use client";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";

function Footer() {
  return (
    <>
      <section className="w-full container mx-auto pt-12">
        <BlurFade delay={0.25} inView>
          <footer className="relative border h-fit mx-auto mb-8 rounded-lg overflow-hidden radial-gradient-bg [--gradient-center:#02081765] [--gradient-edge:#020817]">
            <div className="gap-10 sm:flex justify-between p-5 2xl:py-10 py-5 bg-[#086175] rounded-sm rounded-b-none text-white">
              <div className="w-fit flex-col  flex  justify-center">
                <Image src="/logo.webp" width={100} height={100} alt="logo" />
                <article className="py-2  2xl:w-80 w-64  space-y-1">
                  <h1 className="newFont text-3xl font-bold">Hack Sangraam</h1>
                  <p className="text-sm  leading-[120%] ">
                    Sharpen Your Coding Skills, Compete with Talented Students
                    Nationwide, Win Exciting Prizes & Certificates, Boost Your
                    Coding Portfolio
                  </p>
                </article>
              </div>
              <div className="sm:block flex sm:mt-0 mt-4  gap-2 sm:w-auto w-full sm:space-y-2 relative z-[1]">
                <a
                  href="https://x.com/ramxcodes"
                  target="_blank"
                  className="bg-gray-50 sm:w-auto w-full   grid place-content-center 2xl:h-40 h-32 2xl:p-10 p-5 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="62"
                    viewBox="0 0 70 62"
                    fill="none"
                    className="sm:w-24 w-full  text-[#45BBD5]"
                  >
                    <path
                      d="M55.1291 0H65.8629L42.4127 26.2626L70 62H48.3994L31.481 40.3254L12.1226 62H1.38228L26.4646 33.9092L0 0H22.149L37.4417 19.8114L55.1291 0ZM51.3619 55.7046H57.3096L18.9172 5.96472H12.5347L51.3619 55.7046Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ramxcodes/"
                  target="_blank"
                  className="bg-gray-50 sm:w-auto w-full  grid place-content-center  2xl:h-40 h-32 2xl:p-10 p-5 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 80 78"
                    fill="none"
                    className="sm:w-24 w-full text-[#45BBD5]"
                  >
                    <path
                      d="M16.6 8.79036C16.6 13.3937 12.9 17.1237 8.33333 17.1237C3.76667 17.1237 0.0666667 13.3937 0.0666667 8.79036C0.0666667 4.19036 3.76667 0.457031 8.33333 0.457031C12.9 0.457031 16.6 4.19036 16.6 8.79036ZM16.6667 23.7904H0V77.1237H16.6667V23.7904ZM43.2733 23.7904H26.7133V77.1237H43.2767V49.127C43.2767 33.5604 63.3733 32.287 63.3733 49.127V77.1237H80V43.3537C80 17.087 50.26 18.0437 43.2733 30.9737V23.7904Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:flex hidden"></div>
          </footer>
        </BlurFade>
      </section>
    </>
  );
}

export default Footer;
