import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AuthProvider} from "../contexts/AuthContext";
import {ToastContainer} from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {


    return(
        <AuthProvider >
            <Component {...pageProps} />
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </AuthProvider>

    )
}

export default MyApp
