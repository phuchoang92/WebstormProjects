import ReactDOM from "react-dom/client"
import colors from "./color-data"
import App from "./App2/App";
import {createContext} from "react";

export const ColorContext= createContext();

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
    <ColorContext.Provider value={{colors}}>
        <App/>
    </ColorContext.Provider>

)

