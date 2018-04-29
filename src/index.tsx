import * as React from "react";
import * as ReactDOM from "react-dom";
import { observer, inject } from "mobx-react";
import { types, onPatch } from "mobx-state-tree";

import App from "./components/App";
import RootStore from "./models/RootStore";

const store = RootStore.create({});

onPatch(store, patch => {
    console.log(patch);
})

ReactDOM.render(
    <App store={store} />,
    document.getElementById("root")
)