import React from "react"
import ReactDOM from "react-dom"

function Temporary(){
    return(
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}


function Footer(){
    return(
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be
                    able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                    if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

const secretINgredients=[
    "1 cup unsalted butter",
    "1 cup crunchy peanut",
    "1 cup brown sugar",
    "1 cup white sugar",
    "2 eggs",
    "2.5 cups all purpose",
    "0.5 teaspoon salt"
];

function IngredientsList({items}){
    return React.createElement(
        "ul",
        {className: "ingredients"},
        items.map((ingredient, i)=>
            React.createElement("li", {key:i}, ingredient)
        )
    );
}


const meo =React.createElement("h1", {id:"recipe-0"}, "Baked Salmon")
const ingredientList = React.createElement(IngredientsList, {items: secretINgredients}, null);

ReactDOM.render([<Page/>,<Temporary/>, meo, ingredientList,],document.getElementById("root"))

