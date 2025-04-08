const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child" },[
        React.createElement("h1", {}, "I am H1 TAG"),
        React.createElement("h2", {}, "I am H2 TAG"),
    ])
);

console.log(parent)


const heading = React.createElement("h1", { id: "heading" }, "Hello World from React !");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
//root.render(heading);
