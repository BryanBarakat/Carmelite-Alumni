import { BrowserRouter, Routes, Route } from "react-router-dom";
import Panel from "../components/Panel/Panel";
import Landing from "../components/Landing/Landing";

const routes =(<BrowserRouter>
                    <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/admin" element={<Panel />}></Route>
                    </Routes>
                </BrowserRouter>);

export default routes;