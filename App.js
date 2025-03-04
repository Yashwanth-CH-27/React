// const heading = React.createElement("h1", {}, "HI!! from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "h3 tag"),
    React.createElement("h4", {}, "h4 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
