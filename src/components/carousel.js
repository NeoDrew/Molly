import { useState } from "react";
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";
export default function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="relative bg-cover bg-center overflow-hidden shadow-lg">
            <div
                className={`flex transition-transform ease-out duration-500`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s, i) => {
                    return <img key={i} src={s} alt={`Slide ${i}`} className="rounded-lg" />;
                })}
            </div>

            <div className="absolute top-0 h-full w-full flex items-center justify-between px-1 md:px-5 text-slate-500 text-xl md:text-3xl">
                <button className="hover:text-slate-100 transition-all duration-200 ease-in-out" onClick={previousSlide}>
                    <BsFillArrowLeftCircleFill />
                </button>
                <button className="hover:text-slate-100 transition-all duration-200 ease-in-out" onClick={nextSlide}>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>

            <div className="absolute bottom-0 py-3 flex justify-center gap-2 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i);
                            }}
                            key={"circle" + i}
                            className={`rounded-full w-2 h-2 md:w-5 md:h-5 cursor-pointer transition-all duration-200 ease-in-out hover:bg-slate-400 ${i === current ? "bg-slate-50" : "bg-slate-500"
                                }`}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}