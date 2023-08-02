import React from "react";
import ReactDom from "react-dom/client";

// React Element => Object => HTMLElement(render)

const heading = React.createElement("h1", { id: heading }, "Namaste React❤");

const root = ReactDom.createRoot(document.getElementById("root"));

root.render("root");
