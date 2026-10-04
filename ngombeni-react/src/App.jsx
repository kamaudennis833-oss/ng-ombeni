import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Parents from "./pages/Parents";
import Contact from "./pages/Contact";
import { Privacy, Safeguarding } from "./pages/Legal";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="student-life" element={<StudentLife />} />
        <Route path="news" element={<News />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="parents" element={<Parents />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="safeguarding" element={<Safeguarding />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
