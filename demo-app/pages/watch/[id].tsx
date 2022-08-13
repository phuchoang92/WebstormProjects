import React from 'react';
import { Movie} from "../../typings";
import Head from "next/head";
import Header from "../../components/Header";

interface Props{
    movie: Movie,
}

function WatchMovie ({movie}: Props) {

    return(
        <div className="relative h-screen -bg--body-color -z-0 h-[140vh] ">
            <Head>
                <title>{movie.title}</title>
            </Head>
            <Header/>
            <main className="relative px-[130px] py-[70px] space-y-24">
                <div className="-bg--play-color pt-0.5">
                    <div className="justify-center flex mt-11 mb-[4rem]">
                        <video src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
                               width="1050px"
                               height="auto"
                               controls
                               autoPlay />
                    </div>
                    <div className="info pl-28">
                        <h1 className="font-semibold text-4xl mb-10">{movie.title}</h1>
                        <div>
                            <h2 className='text-2xl mb-4'>Comments</h2>
                            <form action="">
                                <div className="mb-3">
                                    <textarea placeholder="Nhập bình luận" className="rounded-[4px] w-1/2 p-2"></textarea>
                                </div>
                                <div className="">
                                    <button type="submit" className="border rounded-[4px] px-6 py-2 items-center">Gửi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default WatchMovie;

// @ts-ignore
export async function getServerSideProps({query:{id}}) {

    const res1 = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`)
    const mov = await res1.json()

    return{
        props:{
            movie: mov,
        }
    }
}





