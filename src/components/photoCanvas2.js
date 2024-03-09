import React from "react";

export default function photoCanvas2() {
    return (
    <section id="photoCanvas2" className="bg-sky-700">
        <div className="relative h-100 overflow-hidden ">
          <div className="h-auto">
              <img
              className="object-cover object-center w-full h-full brightness-50"
              alt="Me"
              src="./LogAlogPic2.png"
              />
              <div class="absolute top-24 left-10 bg-clip-text text-transparent bg-sky-100 text-3xl font-semibold">
                <p class="flex items-center justify-center">
                  Technology is best when it brings people together.
                </p>
                <p class="text-2xl absolute left-9 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-400 italic">
                  - Matt Mullenweg
                </p>
              </div>
          </div>
        </div>
    </section>
  );
}