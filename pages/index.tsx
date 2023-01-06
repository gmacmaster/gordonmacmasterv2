import React from "react";
import Home from "../components/Home";
import Layout from "../components/Layout";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Projects() {
  return (
    <Layout>
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
    </Layout>
  );
}
