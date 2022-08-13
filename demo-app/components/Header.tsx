import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FaSearch, FaSignOutAlt} from "react-icons/fa";
import Link from "next/link";
import Sidebar from "./Sidebar";
import {useAuth} from "../contexts/AuthContext";
import {API_KEY} from "../utils/requests";

function Header() {

    const searchRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [results, setResults] = useState([])

    // @ts-ignore
    const {user, logout} = useAuth()

    const onChange = useCallback((event: { target: { value: any; }; }) => {
        const query = event.target.value;
        setQuery(query)
        if (query.length) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`)
                .then(res => res.json())
                .then(res => {
                    setResults(res.results)
                })
        } else {
            setResults([])
        }

    }, [])

    const onFocus = useCallback(() => {
        setActive(true)
        window.addEventListener('click', onClick)
    }, [])

    const onClick = useCallback((event: { target: any; }) => {
        // @ts-ignore
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setActive(false)
            window.removeEventListener('click', onClick)
        }
    }, [])

    useEffect(()=>{
        const handleScroll= ()=>{
            if (window.scrollY > 0){
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll",handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])

    return (
        <header className={`${isScrolled && '-bg--body-color'}`}>
            <div className="flex max-w-[1250px] ml-[130px] w-full justify-between items-center">
                <img
                    src="https://xemphim.vip/static/skin/logo-full.png"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain ml-0"
                    alt=""
                />

                <ul className="flex space-x-4 flex">
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Anime</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">Watch History</li>
                </ul>

                <div className="flex items-center space-x-3">
                    <div className="search-box" ref={searchRef}>
                        <input
                            type="text"
                            name=""
                            onFocus={onFocus}
                            onChange={onChange}
                            placeholder="Search Movie"
                            className="w-full border-none outline-none bg-transparent "
                        />
                        { active && results.length > 0 && (
                            <ul className="overflow-auto scrollbar-hide absolute top-[80%] max-h-[250px] border -border-b--search-result shadow-2xl">
                                {results.map(({ id, title }) => (
                                    <li className="max-w-[200px] -bg--body-color py-1 px-2 flex items-center justify-between" key={id}>
                                        <Link href="/movies/[id]" as={`/movies/${id}`}>
                                            <a>{title}</a>
                                        </Link>
                                        <FaSearch/>
                                    </li>
                                ))}
                            </ul>
                        ) }
                        <FaSearch className='search-icon'/>
                    </div>
                    {user ?
                        (<>
                                <Link href="#">
                                    <img  src="https://rb.gy/g1pwyx"
                                          alt=""
                                          className="cursor-pointer rounded object-center"
                                    />
                                </Link>
                                <button
                                    onClick={() => logout()}
                                    className='btn-secondary btn-icon flex items-center '
                                >
                                    <FaSignOutAlt className="mr-2"/> Logout
                                </button>
                            </>
                        ):(
                        <Link href="/login">
                            Login
                        </Link>
                    )}
                </div>
                <Sidebar/>
            </div>
        </header>
    );
}

export default Header;
