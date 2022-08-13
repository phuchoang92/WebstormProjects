import {CharacterBasic} from "../typings";
import {useRef, useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";
import { IMAGE_URL} from "../utils/requests";

interface Props{
    characterList: CharacterBasic[]
}

function CastList({ characterList}: Props){

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
        <div className="h-40 space-y-0.5 w-[700px]">
            <div className="group relative max-w-[700px]">
                <ChevronLeftIcon
                    className={`absolute top-0 bottom-0 left-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
                        !isMoved && 'hidden'
                    }`}
                    onClick={() => handleClick('left')}
                />
                <div className="flex items-center space-x-3 overflow-x-scroll scrollbar-hide space-x-2.5 pr-2 py-2"
                    ref={rowRef}
                >
                    {characterList.map((character) => (
                        <div className="w-full items-center flex flex-col space-y-4 " key={character.id}>
                            <figure className="rounded-full w-[100px] h-[100px] overflow-hidden">
                                <img  src={`${IMAGE_URL}/w500/${character.profile_path}`}/>
                            </figure>
                            <p className="text-sm text-center">{character.name}</p>
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

export default CastList
