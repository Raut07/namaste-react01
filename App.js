const heading = React.createElement(
    "div",
    { id: "Parent" },
    [React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am H1 tag"),
      React.createElement("h2", {}, "I am H22 tag"),
    ]),React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am H1 tag"),
        React.createElement("h2", {}, "I am H22 tag"),
      ]),]
  ); //this is becoming very complex so JSX came in picture
  console.log("In-->",heading);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//OR
// ReactDOM.createRoot(document.getElementById("root")).render(heading);
