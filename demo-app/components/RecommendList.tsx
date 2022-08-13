
import {useRef, useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";
import {Movie} from "../typings";
import {baseURL} from "../constants/movieApi";

interface Props{
    recommendList : Movie[]
}

function RecommendList({ recommendList}: Props){
    console.log(recommendList)
    const rowRef = useRef<HTMLDivElement>(null), [isMoved, setIsMoved] = useState(false),
        handleClick = (direction: string) => {
            setIsMoved(true)
            if (rowRef.current) {
                const {scrollLeft, clientWidth} = rowRef.current
                const scrollTo = direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth
                rowRef.current.scrollTo({left: scrollTo, behavior: 'smooth'})
            }
        };

    return (
        <div className="space-y-0.5 w-[1300px]">
            <div className="group relative max-w-[1300px] h-[400px]">
                <ChevronLeftIcon
                    className={`absolute top-0 bottom-0 left-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
                    !isMoved && 'hidden'
                }`}
                onClick={() => handleClick('left')}
                />
                <div className="flex items-center space-x-3 overflow-x-scroll scrollbar-hide space-x-2.5 pr-2 py-2 h-full"
                     ref={rowRef}>
                    {recommendList.map((movie) => (
                        <div className="w-[300px] px-1 text-center" key={movie.id}>
                            <img src={`${baseURL}/${movie.poster_path}`} alt="image poster"
                                width={200}
                                 height={400}
                            />
                            <p className="text-sm ">{movie.title}</p>
                        </div>
                    ))}
                </div>
                <ChevronRightIcon
                    className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
                     onClick={() => handleClick('right')}
                />
            </div>
        </div>
    );
}

export default RecommendList
