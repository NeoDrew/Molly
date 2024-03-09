import React from "react";
import Contact from "./components/Contact";
import { useRef} from 'react';
import {FaLinkedin, FaArrowUp} from "react-icons/fa";
import { useState, useEffect} from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiFruitTree } from "react-icons/gi";

// Colours Slate 800 / 50, Emerald 700, Sky 700

const wordArray = ['an AI enthusiast', 'a student', 'a software engineer', 'a computer scientist', 'a programmer', 'a mathematician',  'a data scientist'];

const WordChanger = () => {
	const [currWord, setCurrWord] = useState(wordArray[0]);
	const [isActive] = useState(true);

	const index = useRef(0);
	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				index.current++;
        index.current = index.current % wordArray.length;
				setCurrWord(wordArray[index.current]);
			}, 2000);
		}
		return () => clearInterval(interval);
	});

	return (
		<div>
			<p> <span className="text-indigo-300">I'm {currWord}</span>.</p>
		</div>
	);
};

export default function App() {
  const skillsRef = useRef(null);
  const projRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);
  const top = useRef(null);
  return (
    // NAVBAR
    <main className="text-slate-900 bg-slate-200 body-font scroll-smooth">
      <title>Molly Sullivan</title>
      <div ref={top}></div>
      
      <nav class="bg-slate-50 fixed w-full z-20 top-0 start-0 border-b border-slate-200 bg-opacity-50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
        <button onClick={() => {top.current?.scrollIntoView({behavior: 'smooth'}) }} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap">Molly Sullivan</span>
          <div className="flex items-center transform hover:rotate-180 text-2xl transition-transform">
            <GiFruitTree className="mr-2 width-7 text-emerald-800" /> 
          </div>
        </button>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth'}) }} class="text-slate-50 bg-opacity-100 bg-emerald-800 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-500 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 ease-in-out">Contact Me</button>

            <div className="px-3"></div>
            <a
              href="https://www.linkedin.com/in/molly-sullivan-46b776277/"
              className="inline-flex text-gray-700 items-center bg-inherit py-1 px-1 focus:outline-none border-slate-300 border-2 hover:border-gray-400 hover:bg-white hover:text-blue-500 rounded mt-4 md:mt-0 transition-all duration-700 ease-in-out">
              <FaLinkedin className="w-7 h-7 items-center bg-inherit" />
            </a>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <button onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth'}) }} className="block py-2 px-3 rounded hover:bg-slate-300 md:p-0">
                <span>About</span>
              </button>
            </li>
            <li>
              <button onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth'}) }} className="block py-2 px-3 rounded hover:bg-slate-300 md:p-0">
                <span>BioScope</span>
              </button>
            </li>
            <li>
              <button onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth'}) }} className="block py-2 px-3 rounded hover:bg-slate-300 md:p-0">
                <span>University</span>
              </button>
            </li>
            <li>
              <button onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth'}) }} className="block py-2 px-3 rounded hover:bg-slate-300 md:p-0">
                <span>Volunteering</span>
              </button>
            </li>
          </ul>
        </div>
        </div>
      </nav>

      {/* Intro */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url("mollyTry.jpeg")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-end">
          <div className="text-center w-1/2 h-1/4 bg-slate-50 opacity-70 shadow-sm">
            <h2 className="text-5xl pt-2">Hi, I'm Molly Sullivan</h2>
            <p className="mt-2 pb-3">Environmental Scientist • MEnvSci</p>
            <div className="py-0.5 bg-slate-900 w-1/2 translate-x-1/2 hidden sm:block"></div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 min-h-screen">

      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      {/* FOOTER */}
      <section id="Footer" className="relative bg-slate-700">
        <div className="container py-5 mx-auto px-0 text-sky-100 bg-inherit w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="mr-2">
                <FaPhone />
              </span>
              <span>+44 7554713775</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">
                <MdEmail />
              </span>
              <a href="mailto:AndrewMaxwellRobertson@gmail.com">AndrewMaxwellRobertson@gmail.com</a>
            </div>
            <div className="flex items-center">
              <span className="mr-2">© ANDREW 2024 - ALL RIGHTS RESERVED</span>
            </div>
            <div className="flex items-center">
              <div className="pr-4 text-xl">Top</div>
              
              <button
                onClick={() => top.current?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 text-xl bg-sky-100 border-0 py-2 px-2 focus:outline-none hover:bg-emerald-600 hover:text-white rounded text-lg transition-all duration-200 ease-in-out"
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