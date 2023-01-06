import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Model from "./Model";
import Loading from "./Loading";

const mobile = require("is-mobile");

export default function Home() {
  const isMobile = mobile();

  const [loading, setLoading] = useState(true);
  const [waving, setWaving] = useState(true);

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
    <>
      <div style={{ display: "flex" }}>
        {!isMobile && <Model waving={waving} loading={loading} />}
        <div className={styles.center}>
          <div className={styles.introContainer}>
            <div className={styles.greetingText}>Hello!</div>
            <div className={styles.nameText}>I&apos;m Gordon MacMaster</div>
            <div className={styles.greetingDescription}>
              I like to build cool things
            </div>
            <div className={styles.intro}>
              I&apos;m a full stack software engineer with a passion for driving
              positive environmental change. I love tinkering with new
              technologies, exploring the outdoors, and learning from others. I&apos;m currently working on a secret project 🤫.
              More on that coming soon... 🐑 🚀 🌚
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
}
