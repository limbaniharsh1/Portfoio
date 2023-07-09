import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../Main";
import About from "./AllDetails/About";
import Resume from "./AllDetails/Resume";
import Works from "./AllDetails/Works";
import Blog from "./AllDetails/Blog";
import Contact from "./AllDetails/Contact";
import Products from "./AllDetails/Products";
import { AnimatePresence } from "framer-motion";

function AllRoutes() {
  let location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/works" element={<Works />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AllRoutes;
