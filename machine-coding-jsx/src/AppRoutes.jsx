import { Route, Routes } from "react-router-dom";
import ContactForm from "./Pages/Easy/ContactForm";
import Home from "./Pages/Home";
import Easy from "./Pages/Easy/Easy";
import Medium from "./Pages/Medium/Medium";
import Hard from "./Pages/Hard/Hard";
import ProblemRenderer from "./components/ProblemRenderer";

export const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/easy' element={<Easy />} >

            <Route path=":problemId" element={<ProblemRenderer />} />
        </Route>


        <Route path='/medium' element={<Medium />} />

        <Route path='/hard' element={<Hard />} />

        {/*  */}
        {/* <Route path='/contact-form' element = {<ContactFormJS />} /> */}
    </Routes>
)

