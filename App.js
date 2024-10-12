const heading = React.createElement("div",{id:"container"},[
    React.createElement("h1",{id:"title1"},"Hello world bharathbalaji"),
    React.createElement("h2",{id:"title2"},"Hello world bharathbalaji"),
])
const heading2 = React.createElement("div",{id:"container"},[
    React.createElement("h1",{id:"title1"},"Hello world bharathbalaji"),
    React.createElement("h2",{id:"title2"},"Hello world bharathbalaji"),
])
const container = React.createElement("div",{id:"container"},[
    heading,heading2
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);