// import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./Contexts/context";
import createRoutes from "./routes/routes";
// import App from "./App";

const routes = createRoutes();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppProvider>{routes}</AppProvider>);
