import React from "react";

export default function photoCanvas() {
    return (
    <section id="photoCanvas" className="bg-sky-700">
        <div className="relative h-100 overflow-hidden bg-local">
          <div className="h-auto">
            <img
            className="object-cover object-center w-full h-full brightness-50"
            alt="Me"
            src="./logAlog.JPG"
            />
            <div className="absolute top-1/2 right-10 bg-clip-text text-transparent bg-sky-100 text-3xl font-semibold">
              <p className="flex items-center justify-center">
                Let’s go invent tomorrow instead of worrying about what happened yesterday.
              </p>
              <p className="text-2xl absolute right-9 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-400 italic">
                - Steve Jobs
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}