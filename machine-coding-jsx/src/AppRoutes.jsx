import { Route, Routes } from "react-router-dom";
import ContactForm from "./Pages/ContactForm";
import Home from "./Pages/Home";
// import Home from "./pages/Home";
// import ContactForm from "./pages/TSX/ContactForm";

export const AppRoutes = () => (
    <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/contact-form' element = {<ContactForm />} />
        {/* <Route path='/contact-form' element = {<ContactFormJS />} /> */}
    </Routes>
)

