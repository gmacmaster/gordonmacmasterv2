import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import Layout from "../components/Layout";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const html = document.getElementById("html");
    if (html) {
      html.style.overflow = "hidden";
    }
    setTimeout(()=>{
      window.scrollTo(0, 0);
    }, 2001)
    setTimeout(() => {
      const html = document.getElementById("html");
      if (html) {
        html.style.overflow = "unset";
      }
      window.scrollTo(0, 0);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  return (
    <Layout>
      <Home loading={loading} />
      {!loading && (
        <>
          <About />
          <Experience />
          {/*<Work />*/}
          <Contact />
        </>
      )}
    </Layout>
  );
}
