import Head from "next/head";
import Image from "next/image";
import {SubmitHandler, useForm} from "react-hook-form";
import {AuthContext} from "../contexts/AuthContext";
import {useContext} from "react";
import {useRouter} from "next/router";
import {router} from "next/client";
import Link from "next/link";

type Inputs = {
    email: string,
    password: string,
};

function Login() {
    // @ts-ignore
    const { login, error } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const isLogin = login({email: data.email, password: data.password});
        if (isLogin){
            await router.push('/')
        }
    };

    return (
        <div className="relative flex h-screen flex-col bg-black items-center bg-transparent justify-center">
            <Head>
                <title>Xem Phim</title>
                <link rel="icon" href="#"/>
            </Head>
            <Image src="https://rb.gy/p2hphi"
                   layout="fill"
                   className="opacity-60 sm:inline"
                   objectFit="cover"
            />
            <img
                src="https://xemphim.vip/static/skin/logo-full.png"
                className="absolute cursor-pointer object-contain md:left-10 md:top-6"
                width={150}
                height={150}
                alt="Logo"/>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-4xl font-semibold ">Sign In</h1>
                <div className="space-y-4">
                    <label className="inline-block w-full">
                        <input type="email" placeholder="Email" className="input" {...register("email", { required: true })}/>
                    </label>
                    <label className="inline-block w-full">
                        <input type="password" placeholder="Password" className="input" {...register("password", { required: true })}/>
                    </label>
                </div>
                <button type="submit"
                        className="w-full -bg--sign-button py-3 rounded font-semibold">
                        Sign In
                </button>
                <div className="text-gray">
                    Newbie to this Website?{' '}
                    <Link href="/signup">
                        <button className="-text--white-color hover:underline">Sign up now</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
