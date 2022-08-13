import {createContext, FC, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from 'react'
import { User } from '../typings'
import Cookies from 'js-cookie'
import axios from "axios";
import {API_URL} from "../utils/requests";
import cookie from "js-cookie";
import { toast } from "react-toastify";

export interface UserContext {
    user: User| null
    login: ({ email, password }: LoginInput) => Promise<boolean>
    logout: () => Promise<void>
    setUser: (user: User)=>void
}

export interface LoginInput{
    email: string
    password: string
}

export const AuthContext = createContext<UserContext| undefined>(undefined)

interface Props {
    children: ReactNode
}

export const AuthProvider = ({ children }: Props)=>{
    const [user, setUser] = useState<User| null>(null)
    const [error, setError] = useState(" ")

    useEffect(() => {
        checkUserLoggedIn()
    }, [])

    const login = async ({ email, password }: LoginInput) => {
        try {
            const res = await axios.post(`${API_URL}/auth/login`, {
                email: email,
                password: password
            })
            if (res.status === 200){
                cookie.set("access_token", res.data.access_token);
                setUser(res.data.user)
                return true
            }
            return false
        }catch (errorRes){
            console.log("error")
            setError("Error");
            return false
        }
    }

    const logout = async () => {
        const token = Cookies.get("access_token");
        const res = await fetch(`${API_URL}/auth/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (res.ok) {
            setUser(null)
        }
    }

    const checkUserLoggedIn = async () => {
        const token = Cookies.get("access_token");
        if (token) {
            await axios.get(`${API_URL}/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                const userData : User = (
                    response.data.data.user
                )
                setUser(userData)
            }).catch(function (error) {
                console.log(error)
            });
        }
        console.log("Check token")
    }

    return<AuthContext.Provider value={{user, login, logout, setUser} }>
        {children}
    </AuthContext.Provider>
}

export const useAuth = ()=>(
    useContext(AuthContext)
)
