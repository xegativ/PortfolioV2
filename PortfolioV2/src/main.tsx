import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./components/subcomponents/Other/ScrollTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ScrollTop />
        <App />
    </BrowserRouter>
);
