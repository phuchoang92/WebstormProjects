import React from 'react';
import {Movie} from "../typings";
import {baseURL} from "../constants/movieApi";

interface Props{
    movieList: Movie[]
}

function UpComing({movieList}: Props) {
    console.log(movieList)
    return (
        <div className="flex relative top-[-90px] left-30 w-full justify-center ">
            <div className="flex flex-col">
                <h1 className="text-3xl font-semibold mb-[2rem] ">Up Coming</h1>
                <div className="space-y-8">
                    {movieList.map((movie)=>(
                        <div className="flex" key={movie.id}>
                            <img src={`${baseURL}/${movie.poster_path}`}
                                 width={150}
                                 height={400}
                                 className="mr-5"
                            />
                            <div className="flex flex-col space-y-4">
                                <a className="max-w-[150px] font-semibold" href={`/movies/${movie.id}`}>{movie.title}</a>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UpComing;

