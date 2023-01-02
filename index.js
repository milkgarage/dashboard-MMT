import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Main } from "./src/main";


const container = document.getElementById("app");
const root = createRoot(container)
root.render(<Main />);