import React from 'react';
import {CharacterBasic, Movie} from "../../typings";
import Head from "next/head";
import Header from "../../components/Header";
import {baseURL} from "../../constants/movieApi";
import ReactStars from 'react-stars'
import CastList from "../../components/CastList";
import Link from "next/link";
import {FaPlay} from "react-icons/fa";
import RecommendList from "../../components/RecommendList";
import {BASE_URL} from "../../utils/requests";

interface Props{
    movie: Movie,
    characterList: CharacterBasic[]
    recommendList: Movie[]
}

function MovieDetail ({movie, characterList, recommendList}: Props) {

    return(
        <div className="relative h-screen -bg--body-color -z-0 h-[140vh] ">
            <Head>
                <title>{movie.title}</title>
            </Head>
            <Header/>
            <main className="relative px-[130px] py-[70px] space-y-24 ">
                <div className="p-[1rem]">
                    <div className="flex flex-row justify-between">
                        <div className="p-4">
                            <p className="">
                                <img src={`${baseURL}/${movie.poster_path}`}
                                     width={400}
                                     height={600}
                                />
                            </p>
                        </div>

                        <div className="px-10 py-[1.5rem] max-w-[750px]">
                            <Link href={`/watch/${movie.id}`}>
                                <a className="mb-[2rem] -bg--play-button flex justify-center items-center gap-x-3 text-2xl max-w-[200px] rounded-2xl p-[10px]">
                                    <FaPlay/> Watch
                                </a>
                            </Link>

                            <h1 className="text-4xl font-semibold mb-[10px]">{movie.title}</h1>
                            <h2 className="text-xl mb-[1rem] -text--nav-link">{movie.original_title}</h2>

                            <div  className="mb-[2rem] flex items-center space-x-4" >
                                <ReactStars count={5} value={movie.vote_average/2.0} edit={false} size={30}/>
                                <p>{movie.vote_average}</p>
                            </div>

                            <div className="genre-group mb-[2rem]">
                                <h3 className="text-2xl font-semibold mb-2">GENRE</h3>
                                <div className="flex space-x-3">
                                    {movie.genres.map((genre)=>(
                                        <button className="bg-transparent border rounded-full py-2 px-4 font-normal text-xs " key={genre.id}>
                                           {genre.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <dl className="flex mb-[2rem]">
                                <dt className="mr-2">RELEASE DATE</dt>
                                <dd className="-text--nav-link">{movie.release_date}</dd>
                            </dl>

                            <div className="overview space-y-3 mb-[2rem]">
                                <h3 className="font-semibold text-2xl">OVERVIEW</h3>
                                <p className="text-justify leading-normal -text--nav-link">{movie.overview}</p>
                            </div>
                            <h3 className="text-2xl font-semibold mb-[1rem]">CAST</h3>
                            <div className="cast-list">
                                <CastList characterList={characterList}/>
                            </div>
                        </div>
                    </div>
                    <div className="recommend p-[1rem] text-2xl">
                        <h1>Recommended Movie</h1>
                        <RecommendList recommendList={recommendList}/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MovieDetail;

// @ts-ignore
export async function getServerSideProps({query:{id}}) {

    const res1 = await fetch(`${BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`)
    const res2 = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`)
    const res3 = await fetch(`${BASE_URL}/movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`)
    const mov = await res1.json()
    const movCredit = await res2.json()
    const recommend = await res3.json()

    return{
        props:{
            movie: mov,
            characterList : movCredit.cast.slice(0,5),
            recommendList: recommend.results.slice(0,6)
        }
    }
}





