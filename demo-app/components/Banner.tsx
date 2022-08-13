import {Movie} from "../typings";
import {baseURL} from "../constants/movieApi";
import React, {useEffect, useState} from 'react';
import {FaInfoCircle, FaPlay} from "react-icons/fa";
import Image from 'next/image'
import Link from "next/link";

interface Props {
    trendingNow : Movie[]
}

function Banner({trendingNow}:Props) {

    const [movie, setMovie] = useState<Movie| null>(null)

    useEffect(()=>{
        setMovie(trendingNow[Math.floor(Math.random()*trendingNow.length)])
    }, [trendingNow])

    return (
        <section className="flex flex-col space-y-2 min-h-[470px] rounded-[0.5rem] mb-[8rem]">
            <div className="absolute max-h-[1000px] -z-10 max-w-[1000px]">
                <Image src={`${baseURL}${movie?.backdrop_path || movie?.poster_path}` }
                       alt="movie image"
                       className="rounded-[0.5rem]"
                       width={1000}
                       height={562}
                       priority
                       decoding="async"
                />
            </div>

            <h1 className="pl-10 pt-[180px] text-2xl font-bold text-shadow-md max-w-xl">
                {movie?.title || movie?.original_title}</h1>
            <p className="pl-10 max-w-[450px] text-shadow-md line-clamp-3 ">{movie?.overview}</p>

            <div className="pl-10 flex space-x-3">
                <button className="bannerButton -bg--white-color -text--body-color">
                    <Link href={`/watch/${movie?.id}`}>
                        <a className="flex items-center gap-x-3" >
                            <FaPlay/> Play
                        </a>
                    </Link>
                </button>
                <button  className="bannerButton -bg--button-color">
                    <Link href={`/movies/${movie?.id}`}>
                        <a className="flex items-center" >
                            More Info <FaInfoCircle className="ml-2"/>
                        </a>
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default Banner;