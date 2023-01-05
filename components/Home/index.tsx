import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Model from "./Model";
import Loading from "./Loading";

const mobile = require("is-mobile");

export default function Home() {
  const isMobile = mobile();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const html = document.getElementById("html");
    if (html) {
      html.style.overflow = "hidden";
    }
    setTimeout(() => {
      const html = document.getElementById("html");
      if (html) {
        html.style.overflow = "unset";
      }
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div
      className={styles.main}
      style={{ overflow: loading ? "hidden" : "inherit" }}
    >
      <div className={styles.description}>
        <p>
          <Link
            href={"/Gordon_MacMaster_Resume_2022.pdf"}
            style={{ display: "flex" }}
            target={"_blank"}
          >
            Resume
          </Link>
        </p>
      </div>
      <div className={styles.center}>
        <Link
          href={"/Gordon_MacMaster_Resume_2022.pdf"}
          style={{ display: "flex" }}
          target={"_blank"}
        >
          <div className={styles.thirteen}>Resume</div>
        </Link>
      </div>
      {!isMobile && <Model />}
      {loading && <Loading />}
    </div>
  );
}
