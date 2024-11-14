import "./styles.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld } from "./helloWorld";
import logo from "./content/logo_2.png";

const root = createRoot(document.getElementById("root"));
root.render(
    <>
    <div>
        <img src={logo} style={{ width: 350 }} />
        <HelloWorld />
    </div>
    </>
);        
