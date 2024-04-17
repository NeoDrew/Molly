import React, { useEffect, useRef } from "react";
import Contact from "./components/Contact";
import Carousel from "./components/carousel";
import { FaLinkedin, FaArrowUp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiFruitTree } from "react-icons/gi";
import './App.css';
import 'animate.css';

// Colours Slate 800 / 50, Emerald 700, Sky 700


export default function App() {
  const about = useRef(null);
  const contactRef = useRef(null);
  const top = useRef(null);
  const bioscope = useRef(null);
  const university = useRef(null);
  let slides = [
    "BioScope1.jpg",
    "BioScope2.jpg",
    "BioScope3.jpg",
    "BioScope4.jpg",
  ];

  const fadeElements = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.5
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof Element) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    fadeElements.current.forEach(element => {
      if (element instanceof Element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect(); // Cleanup when component unmounts
    };
  }, []); // Run effect only once on component mount

  return (
    // NAVBAR
    <main className="text-slate-900 bg-slate-100 body-font scroll-smooth">
      <title>Molly Sullivan</title>
      <div ref={top}></div>

      <nav class="bg-slate-50 fixed w-full z-20 top-0 start-0 border-b border-slate-200 bg-opacity-60 hover:bg-opacity-80 transition-all duration-700 ease-in-out">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 md:p-4">

          <button onClick={() => { top.current?.scrollIntoView({ behavior: 'smooth' }) }} className="flex items-center space-x-3 text-2xl rtl:space-x-reverse">
            <span class="self-center font-semibold whitespace-nowrap">Molly Sullivan</span>
            <div className="flex items-center transform hover:rotate-180 transition-transform">
              <GiFruitTree className="mr-2 width-7 text-emerald-800" />
            </div>
          </button>

          <div class="flex md:order-2 space-x-3 md:space-x-0">
            <button type="button" onClick={() => { contactRef.current?.scrollIntoView({ behavior: 'smooth' }) }} class="text-slate-50 bg-opacity-100 bg-emerald-800 hover:bg-emerald-600 focus:ring-2 md:focus:ring-4 focus:outline-none focus:ring-emerald-500 font-medium rounded-lg h-10 md:h-auto text-sm px-2 md:px-4 py-0 md:py-2 text-center transition-all duration-300 ease-in-out">Contact Me</button>

            <div className="px-0 md:px-3"></div>
            <a
              href="https://www.linkedin.com/in/molly-sullivan-46b776277/"
              className="inline-flex text-gray-700 items-center bg-inherit py-1 px-1 focus:outline-none border-slate-300 border-2 hover:border-slate-400 hover:bg-white hover:text-blue-500 rounded transition-all duration-700 ease-in-out">
              <FaLinkedin className="w-7 h-7 items-center bg-inherit" />
            </a>
          </div>
          <div class="items-center justify-between hidden w-0 md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <button onClick={() => { about.current?.scrollIntoView({ behavior: 'smooth' }) }} className="block py-2 px-3 rounded hover:bg-emerald-700 hover:text-slate-100 transition-all duration-300 ease-in-out md:p-0">
                  <span>About</span>
                </button>
              </li>
              <li>
                <button onClick={() => { bioscope.current?.scrollIntoView({ behavior: 'smooth' }) }} className="block py-2 px-3 rounded hover:bg-emerald-700 hover:text-slate-100 transition-all duration-300 ease-in-out md:p-0">
                  <span>BioScope</span>
                </button>
              </li>
              <li>
                <button onClick={() => { university.current?.scrollIntoView({ behavior: 'smooth' }) }} className="block py-2 px-3 rounded hover:bg-emerald-700 hover:text-slate-100 transition-all duration-300 ease-in-out md:p-0">
                  <span>University</span>
                </button>
              </li>
              <li>
                <button onClick={() => { contactRef.current?.scrollIntoView({ behavior: 'smooth' }) }} className="block py-2 px-3 rounded hover:bg-emerald-700 hover:text-slate-100 transition-all duration-300 ease-in-out md:p-0">
                  <span>Volunteering</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Intro */}

      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("molly.jpeg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-end">
          <div className="text-center w-1/2 h-1/4 bg-slate-50 opacity-60 shadow-sm hover:opacity-80 transition-all duration-300 ease-in-out">
            <div className="fade-in-element-1" ref={el => fadeElements.current.push(el)}>
              <h2 className="text-2xl md:text-3xl lg:text-5xl pt-2">Hi, I'm Molly Sullivan</h2>
              <p className="mt-2 pb-3 italic text-sm md:text-base">Environmental Scientist • MEnvSci</p>
              <div className="py-0.5 bg-slate-900 w-1/2 translate-x-1/2 hidden sm:block"></div>
              <div className="py-1 md:py-2"></div>
              <button
                onClick={() => about.current?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-slate-800 text-6xl md:text-5xl border-0 focus:outline-none transition-all duration-200 ease-in-out"
              >
                <IoIosArrowDown />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* About Me */}
      <div className="h-screen border-t pb-12 border-emerald-800" ref={about}>
        <div className="relative h-full">
          <div className="relative z-10 h-full">
            <div className="text-slate-100 flex justify-between">
              <p className="text-center text-5xl pt-6 pb-2">
                {/* TODO Find correct Icon */}
                <BiSolidRightArrow />
              </p>
              <p className="text-center text-2xl md:text-5xl pt-6 pb-2 italic font-serif">
                - About Me -
              </p>
              <p className="text-center text-5xl pt-6 pb-2">
                <BiSolidLeftArrow />
              </p>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative w-screen h-screen text-slate-100">
                <div className="fade-in-element-1" ref={el => fadeElements.current.push(el)}>
                  <div className={`absolute box bg-emerald-900 rounded-lg shadow-md hover:bg-emerald-700 transition-all`} style={{ width: '30%', height: '35%', top: '15%', left: '13%' }}>
                    <p className="text-lg pt-1 text-center bold leading-tight">
                      - Testimonial -
                    </p>
                    <p className="px-3 pb-3 md:pb-0 leading-none text-ellipsis text-center text-sm md:text-sm z-0">
                      {/* TODO - get a real quote lol */}
                      "Molly Sullivan is a very smart person, Molly Sullivan is a very smart person, Molly Sullivan is a very smart person, Molly Sullivan is a very smart person, Molly Sullivan is a very smart person, Molly Sullivan is a very smart person."
                    </p>
                  </div>
                  <div className={`absolute box text-xs md:text-sm text-slate-500 text-center bg-transparent`} style={{ width: '30%', height: '6%', top: '50%', left: '13%' }}>
                    - Charles Walace, Dept Head Environmental Science
                  </div>
                  <div className={`absolute box bg-emerald-900 rounded-lg shadow-md hover:bg-emerald-700 transition-all z-1`} style={{ width: '30%', height: '35%', top: '15%', left: '57%' }}>
                    <p className="text-lg pt-1 text-center bold leading-tight">
                      - Personal Summary -
                    </p>
                    <p class="px-3 pb-3 md:pb-0 leading-none text-ellipsis text-center text-xs md:text-sm z-0" style={{ width: '100%', height: '80%', overflow: 'auto' }}>
                      I am a 2nd year student at the University of Manchester studying Environmental Science as an Integrated Master's degree and specializing in Pollution and Environmental Processes. I love the interdisciplinary nature of Environmental Science and my flexible approach to work reflects this. My passion for Biology, Chemistry, and Geography means I have critical thinking skills that can be applied in all fields of work. I have numerous years of experience in both paid and voluntary roles which means I am able to work in many different environments, whether in groups or alone.
                    </p>
                  </div>
                  <div className={`absolute box rounded-lg shadow-md bg-cover bg-center`} style={{ backgroundImage: 'url("groupPhotoMolly2.jpeg")', width: '40%', height: '36%', top: '56%', left: '30%' }}>
                  </div>
                  <div className={`absolute box text-xs md:text-sm text-slate-500 text-center bg-transparent`} style={{ width: '40%', height: '6%', top: '92%', left: '30%' }}>
                    03/2024 - Snowdown Mountain Trip
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1/6 md:h-1/4">
              <div className="absolute inset-0 bg-emerald-800 transform -skew-y-6 origin-top-left z-1"></div>
            </div>
            <div className="absolute top-0 right-0 w-full h-1/6 md:h-1/4">
              <div className="absolute inset-0 bg-emerald-800 transform skew-y-6 origin-top-right z-1"></div>
            </div>

          </div>
        </div>
      </div>

      {/* BioScope */}
      <div className="h-screen border-b border-emerald-800 bg-emerald-800 z-1" ref={bioscope}>
        <div className="relative h-full">
          <div className="relative z-10 h-full">
            <p className="text-emerald-800 text-left text-3xl md:text-6xl pl-12 pt-16 md:pt-10 italic font-serif">
              BioScope
            </p>
            <p className="text-emerald-800 text-left text-xl md:text-2xl pl-12 pt-1 italic font-serif">
              Sept 2024 - July 2025
            </p>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative w-screen h-screen text-slate-100">
                <div className={`absolute box bg-transparent shadow-lg`} style={{ width: '55%', height: '32%', top: '20%', left: '6%' }}>
                    <Carousel slides={slides} className="rounded-lg shadow-lg" />
                </div>
                <div className={`absolute box bg-greeen`} style={{ width: '37%', height: '32%', top: '20%', left: '63%' }}>
                  <div className="fade-in-element-1" ref={el => fadeElements.current.push(el)}>
                    <ul class="pl-4 text-slate-100 text-xs lg:text-2xl font-medium leading-relaxed">
                      <li>
                        <span>1.</span>
                        <a className="px-2"> Planing to join BioScope in September 2024!
                        </a>
                      </li>
                      <br></br>
                      <li>
                        <span>2.</span>
                        <a className="px-2">To Be Continued...</a>
                      </li>
                      <br></br>
                      <li>
                        <span>3.</span>
                        <a className="px-2">...</a>
                      </li>
                      <br></br>
                      <li>
                        <span>4.</span>
                        <a className="px-2">...</a>
                      </li>
                      <br></br>
                      <li>
                        <span>5.</span>
                        <a className="px-2">...</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1/4">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-100 transform -skew-y-6 origin-top-left shadow-lg"></div>
            </div>

          </div>
        </div>
      </div>

      {/* University */}
      <div className="h-screen border-b border-emerald-800 z-1" ref={university}>
        <div className="relative h-full">
          <div className="py-20 md:py-12"> </div>
          <div className="relative z-10 h-full">
            <p className="text-emerald-800 text-right text-2xl md:text-3xl pr-20 italic font-serif pb-1">
              Sept 2023 - June 2026
            </p>
            <p className="text-emerald-800 text-right text-3xl md:text-6xl pr-6 italic font-serif">
              The University of Manchester
            </p>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative w-screen h-screen text-slate-100">
                <div className={`absolute box rounded-lg shadow-md bg-cover bg-center fade-in-element-1`} ref={el => fadeElements.current.push(el)} style={{ backgroundImage: 'url("groupPhotoMolly.jpeg")', width: '35%', height: '42%', top: '17%', left: '15%' }}>
                </div>
                <div className={`absolute box text-xs md:text-sm text-slate-500 text-center bg-transparent fade-in-element-1`} ref={el => fadeElements.current.push(el)} style={{ width: '35%', height: '4%', top: '59%', left: '15%' }}>
                  03/2024 - Snowdown mountain trip
                </div>
                <div className={`absolute box fade-in-element-2`} style={{ width: '35%', height: '42%', top: '17%', left: '60%' }} ref={el => fadeElements.current.push(el)}>
                  <ul class="list-disc text-emerald-800 text-xs lg:text-lg font-medium">
                    <li>Began my journey as an integrated master's student studying Environmental Science in 2022</li>
                    <li>Proudly represented the University of Manchester by giving tours to prospective students</li>
                    <li>Conservation work at the FIRS Environmental Research Station including cleaning contaminated ponds and creating a Himalyan Garden</li>
                    <li>Organised on-campus events to raise awareness of environmental issues among the university community and inspire students and academics alike to live sustainably</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1/4">
              <div className="absolute inset-0 bg-emerald-800 transform -skew-y-6 origin-top-left shadow-lg"></div>
            </div>

          </div>
        </div>
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>


      {/* FOOTER */}
      <section id="Footer" className="relative bg-slate-800">
        <div className="container py-5 mx-auto text-slate-100 text-xs md:text-base bg-inherit w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="mr-2">© AMR</span>
            </div>

            <div className="flex items-center hover:text-emerald-800 transition-all duration-200 ease-in-out">
              <span className="mr-2">
                <MdEmail />
              </span>
              <a href="mailto:molly.sulli1904@gmail.com">molly.sulli1904@gmail.com</a>
            </div>

            <div className="flex items-center">
              <span className="mr-2">
                <FaPhone />
              </span>
              <span>+44 7823 387913</span>
            </div>

            <div className="flex items-center">
              <div className="pr-1 md:pr-4">Back to Top</div>

              <button
                onClick={() => top.current?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 text-xl bg-sky-100 border-0 p-1 md:p-2  focus:outline-none hover:bg-emerald-600 hover:text-white rounded text-lg transition-all duration-200 ease-in-out"
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}