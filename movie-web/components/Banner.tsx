import React, {useEffect, useState} from 'react';
import {Movie} from "../typings";
import Image from "next/image";
import {baseURL} from "../constants/movie";
import {FaPlay} from "react-icons/fa";
import {InformationCircleIcon} from "@heroicons/react/solid";

interface Props{
    trendingNow : Movie[]
}

function Banner({ trendingNow }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(()=>{
        setMovie(trendingNow[Math.floor(Math.random() * trendingNow.length)])
    },[trendingNow])

    return (
        <div className="flex flex-col space-y-2 py-5 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pd-12">
            <div className=" top-0 left-0 -z-10 h-[95vh] w-screen">
                <Image
                    src={`${baseURL}${movie?.backdrop_path || movie?.poster_path}`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold">
                {movie?.title || movie?.name || movie?.original_name}</h1>
            <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg md:max-w-2xl md:text-xl">{movie?.overview}</p>

            <div className="flex space-x-3">
                <button className="bannerButton bg-white text-black">
                    <FaPlay className="h-5 w-5 text-black md:h-7 md:w-7"/> Play
                </button>
                <button className="bannerButton bg-[gray]/70">
                        More Info <InformationCircleIcon className="h-5 w-5 md:h-7 md:w-7"/>
                </button>
            </div>
        </div>
    );
}

export default Banner;

