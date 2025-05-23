const heading = React.createElement(
  "h1",
  { id: "header", className: "rrr" },
  "wwHello React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const heading1 = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading1);
//OR
// ReactDOM.createRoot(document.getElementById("root1")).render(heading1);
