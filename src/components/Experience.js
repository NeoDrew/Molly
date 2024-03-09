// src/components/Experience.js
import { MdWork } from "react-icons/md";
import React from "react";
import './Experience.css';

import data from '../data.json';

export default function Experience() {

  // const [hoveredPicture, setHoveredPicture] = useState(null);

  const handleMouseEnter = (index) => {
    for (let i = 0; i < Object.keys(data.resources).length; i++) {
      const toMove = document.getElementById(i);
      toMove.classList.remove('translate-x-52');
      toMove.classList.remove('-translate-x-52');

      const info = document.getElementById(i+0.5);
      info.classList.remove('opacity-100')
      info.classList.add('opacity-0')
    }
    // alert(Object.keys(data.resources).length)
    if (index === Object.keys(data.resources).length - 1){
      for (let i = 0; i < Object.keys(data.resources).length - 1; i++) {
        const toMove = document.getElementById(i);
        toMove.classList.add('-translate-x-52');
      }
    } else{
      for (let i = index+1; i < Object.keys(data.resources).length; i++) {
        const toMove = document.getElementById(i);
        toMove.classList.add('translate-x-52');
      }
    }

    const info = document.getElementById(index+0.5);
    info.classList.remove('opacity-0')
    info.classList.add('opacity-100')
  };    
  
  const handleMouseLeave = () => {
    for (let i = 0; i < Object.keys(data.resources).length; i++) {
      const toMove = document.getElementById(i);
      toMove.classList.remove('translate-x-52');
      toMove.classList.remove('-translate-x-52');
    }

    for (let i = 0; i < Object.keys(data.resources).length; i++) {
      const info = document.getElementById(i+0.5);
      info.classList.remove('opacity-100')
      info.classList.add('opacity-0')
    }
  };

  return (
    <div id="experience" className="py-2 bg-gradient-to-r from-sky-500 to-indigo-500 overflow-hidden place-content-center">
      <div className="text-center mb-10 my-10 pb-8 text-white">
        <MdWork className="text-4xl inline-block mb-4" />
        <h1 className="sm:text-4xl text-4xl font-medium title-font text-white mb-4">
          My Experience
        </h1>
        <p className="text-base leading-relaxed  text-white">
          Professional Journey: A Snapshot of My Experience
        </p>
      </div>
      
      
      <div className="my-12 content-center position: relative flex flex-wrap bg-sky-100 py-3 px-2 border-4 border-gray-600 overflow-hidden">
        <div className="flex z-9 content-center" onMouseLeave={handleMouseLeave}>
          {data.resources.map((resource, index) => {
            if (index === Object.keys(data.resources).length -1 ){
              return (
                <div 
              id={index}
              key={index} 
              className={"picture-container text-center relative px-1 w-auto min-w-16 rounded ${hoveredPicture === picture.id ? 'hovered' : ''}"}
              onMouseEnter={() => handleMouseEnter(index)}
              >
                <a
                  href={resource.link}
                  className="rounded h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-1 relative overflow-hidden"
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="w-full aspect-square transition-all duration-300 filter brightness-100 hover:brightness-80"
                  />
                </a>
                <a
                  id={index + 0.5}
                  href={resource.link}
                  className="rounded -translate-x-52 duration-500 transition-opacity opacity-0 h-full w-48 aspect-square block absolute top-0 text-gray-800 text-left bg-inherit z-8"
                >
                  <h3 className="py-0 px-0 mx-auto mt-3 text-l font-bold">
                    {resource.title}
                  </h3>
                  <h3 className="px-0 mx-auto text-xs">
                    {resource.dates}
                  </h3>
                  <h3 className="px-0 mx-auto text-xs">
                    {resource.desc}
                  </h3>
                </a>
              </div>
              )
            }
            else{
              return (
                <div 
                id={index}
                key={index} 
                className={"picture-container text-center relative px-1 w-auto min-w-16 rounded ${hoveredPicture === picture.id ? 'hovered' : ''}"}
                onMouseEnter={() => handleMouseEnter(index)}
                >
                  <a
                    href={resource.link}
                    className="rounded h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-9 relative overflow-hidden"
                  >
                    <img
                      src={resource.imageUrl || ''}
                      alt={resource.title}
                      className="w-full aspect-square transition-all duration-300 filter brightness-100 hover:brightness-80"
                    />
                  </a>
                  <a
                    id={index + 0.5}
                    href={resource.link}
                    className="rounded translate-x-60 duration-500 transition-opacity opacity-0 h-full w-48 aspect-square block absolute top-0 text-gray-800 text-left bg-inherit z-9"
                  >
                    <h3 className="py-0 px-0 mx-auto mt-3 text-l font-bold">
                      {resource.title}
                    </h3>
                    <h3 className="px-0 mx-auto text-xs">
                      {resource.dates}
                    </h3>
                    <h3 className="px-0 mx-auto text-xs">
                      {resource.desc}
                    </h3>
                  </a>
                </div>
              );
            }
            }
          )
        }
        </div>
      </div>
    </div>
  );
}